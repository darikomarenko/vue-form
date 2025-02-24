<template>
  <div class="container">
    <h1>Учетные записи</h1>
    <b-button @click="toggleForm" variant="primary">+</b-button>

    <div v-if="showForm" class="mt-3">
      <b-form @submit.prevent="addNewAccount">
        <div class="message mt-2">
          <span>
            <i class="bi bi-question-circle"></i>
            Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
          </span>
        </div>
        <b-row>
          <b-col>
            <b-form-group label="Метка">
              <b-form-input
                v-model="newAccount.label"
                :state="isValid(newAccount.label)"
                @blur="validateAccount(newAccount.label)"
                placeholder="Метка (макс. 50 символов)"
                maxlength="50"
              />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Тип записи">
              <b-form-select v-model="newAccount.type" :options="accountTypes" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Логин">
              <b-form-input v-model="newAccount.login" :state="isValid(newAccount.login)" placeholder="Логин" />
            </b-form-group>
          </b-col>

          <b-col v-if="newAccount.type === 'Локальная'">
            <b-form-group label="Пароль">
              <b-form-input v-model="newAccount.password" :state="isValid(newAccount.password)" placeholder="Пароль" type="password" />
            </b-form-group>
          </b-col>

          <b-col class="text-center align-self-end d-flex gap-2">
            <b-button variant="success" type="submit">Добавить</b-button>
            <b-button variant="secondary" @click="toggleForm">Отмена</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>

    <div v-for="(account, index) in accounts" :key="index" class="mt-3">
      <b-form @submit.prevent="saveAccount(index)">
        <b-row>
          <b-col>
            <b-form-group label="Метка">
              <b-form-input
                v-model="account.label"
                :state="isValid(account.label)"
                @blur="validateAccount(account.label, index)"
                placeholder="Метка (макс. 50 символов)"
                maxlength="50"
                readonly
              />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Тип записи">
              <b-form-select v-model="account.type" :options="accountTypes" @change="handleTypeChange(index)" disabled />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Логин">
              <b-form-input v-model="account.login" :state="isValid(account.login)" @blur="validateAccount(index)" placeholder="Логин" readonly />
            </b-form-group>
          </b-col>

          <b-col v-if="account.type === 'Локальная'">
            <b-form-group label="Пароль">
              <b-form-input v-model="account.password" :state="isValid(account.password)" @blur="validateAccount(index)" placeholder="Пароль" type="password" readonly />
            </b-form-group>
          </b-col>

          <b-col class="text-center align-self-end">
            <b-button variant="danger" @click="deleteAccount(index)">Удалить</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAccountStore } from '../../stores/accountStore';
import { BButton, BForm, BFormGroup, BFormInput, BFormSelect, BRow, BCol } from 'bootstrap-vue-next';

const accountTypes = [
  { value: 'LDAP', text: 'LDAP' },
  { value: 'Локальная', text: 'Локальная' }
];

const accountStore = useAccountStore();
const accounts = computed(() => accountStore.accounts);

const showForm = ref(false);
const newAccount = ref({
  label: '',
  type: 'LDAP',
  login: '',
  password: null
});

const toggleForm = () => {
  showForm.value = !showForm.value;
};

const transformLabel = (label) => {
  return label.split(';').map(part => part.trim()).join('; ');
};

const addNewAccount = () => {
  if (isValid(newAccount.value.label) && isValid(newAccount.value.login)) {
    const account = {
      ...newAccount.value,
      label: transformLabel(newAccount.value.label)
    };
    accountStore.addAccount(account);
    newAccount.value = { label: '', type: 'LDAP', login: '', password: null };
    showForm.value = false;
  }
};

const saveAccount = (index) => {
  const account = accounts.value[index];
  if (isValid(account.label) && isValid(account.login)) {
    account.label = transformLabel(account.label);
    accountStore.updateAccount(index, account);
  }
};

const handleTypeChange = (index) => {
  const account = accounts.value[index];
  if (account.type === 'LDAP') {
    account.password = null;
  }
};

const validateAccount = (index) => {
  const account = accounts.value[index];
  const isValid = account.login && (account.type === 'LDAP' || (account.type === 'Локальная' && account.password));
  if (isValid) {
    account.label = transformLabel(account.label);
    accountStore.updateAccount(index, account);
  } else {
    account.label = '';
    account.login = '';
    account.password = null;
  }
};

const deleteAccount = (index) => {
  accountStore.deleteAccount(index);
};

const isValid = (value, field) => {
  if (field === 'login') {
    return value && value.length <= 100;
  }
  return value && value.length > 0;
};
</script>

<style scoped>
.mt-2 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.message {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  max-width: 50vw;
  margin-bottom: 5px;
}

span {
  font-size: 14px;
  color: #555;
}

i {
  font-size: 18px;
  color: #007bff;
}

@media (max-width: 768px) {
  .message {
    font-size: 12px;
    padding: 8px;
  }

  .mt-2 {
    flex-direction: column;
    gap: 5px;
  }

  .text-center.align-self-end {
    text-align: center;
  }

  .b-col {
    padding: 0 8px;
  }
}

@media (max-width: 425px) {
  .message {
    font-size: 10px;
    padding: 6px;
  }

  h1 {
    font-size: 18px;
  }

  .b-col {
    padding: 0 4px;
  }

  .b-form-input,
  .b-form-select {
    font-size: 12px;
  }

  .b-button {
    font-size: 12px;
    padding: 5px 10px;
  }
}
</style>
