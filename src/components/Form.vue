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
        <b-row class="g-3">
          <b-col sm="12" md="6" lg="3">
            <b-form-group label="Метка">
              <b-form-input
                v-model="newAccount.label"
                placeholder="Метка (макс. 50 символов)"
                maxlength="50"
              />
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="3">
            <b-form-group label="Тип записи">
              <b-form-select v-model="newAccount.type" :options="accountTypes" />
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="3">
            <b-form-group label="Логин">
              <b-form-input
                v-model="newAccount.login"
                :state="isValid(newAccount.login, 'login')"
                placeholder="Логин"
              />
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="3" v-if="newAccount.type === 'Локальная'">
            <b-form-group label="Пароль">
              <b-form-input
                v-model="newAccount.password"
                :state="isValid(newAccount.password, 'password')"
                placeholder="Пароль"
                type="password"
              />
            </b-form-group>
          </b-col>

          <b-col sm="12" class="align-self-end d-flex gap-2">
            <b-button variant="success" type="submit" :disabled="!isFormValid">Добавить</b-button>
            <b-button variant="secondary" @click="toggleForm">Отмена</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>

    <div v-for="(account, index) in accounts" :key="index" class="mt-3">
      <b-form @submit.prevent="saveAccount(index)">
        <b-row class="g-3">
          <b-col sm="12" md="6" lg="3">
            <b-form-group label="Метка">
              <b-form-input
                v-model="account.label"
                placeholder="Метка (макс. 50 символов)"
                maxlength="50"
                readonly
              />
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="3">
            <b-form-group label="Тип записи">
              <b-form-select v-model="account.type" :options="accountTypes" disabled />
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="3">
            <b-form-group label="Логин">
              <b-form-input v-model="account.login" placeholder="Логин" readonly />
            </b-form-group>
          </b-col>

          <b-col sm="12" md="6" lg="3" v-if="account.type === 'Локальная'">
            <b-form-group label="Пароль">
              <b-form-input v-model="account.password" placeholder="Пароль" type="password" readonly />
            </b-form-group>
          </b-col>

          <b-col sm="12" class="align-self-end">
            <b-button variant="danger" @click="deleteAccount(index)">Удалить</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAccountStore } from '../../stores/accountStore';
import { BButton, BForm, BFormGroup, BFormInput, BFormSelect, BRow, BCol } from 'bootstrap-vue-next';

interface Account {
  label: string;
  type: 'LDAP' | 'Локальная';
  login: string;
  password: string;
}

const accountTypes = [
  { value: 'LDAP', text: 'LDAP' },
  { value: 'Локальная', text: 'Локальная' }
];

const accountStore = useAccountStore();
const accounts = computed(() => accountStore.accounts);

const showForm = ref(false);
const newAccount = ref<Account>({
  label: '',
  type: 'LDAP',
  login: '',
  password: '',
});

const toggleForm = () => {
  showForm.value = !showForm.value;
};

const transformLabel = (label: string): string[] => {
  return label ? label.split(';').map(part => part.trim()) : [];
};

const addNewAccount = () => {
  if (isFormValid.value) {
    const account = {
      ...newAccount.value,
      label: transformLabel(newAccount.value.label).join(';') // Сохраняем обратно в строку
    };
    accountStore.addAccount(account);
    newAccount.value = { label: '', type: 'LDAP', login: '', password: '' };
    showForm.value = false;
  }
};

const saveAccount = (index: number) => {
  const account = accounts.value[index];
  if (isValid(account.login, 'login')) {
    account.label = transformLabel(account.label).join(';');
    accountStore.updateAccount(index, account);
  }
};

const deleteAccount = (index: number) => {
  accountStore.deleteAccount(index);
};

const isValid = (value: string | null, field?: string): boolean => {
  if (!value) return field !== 'login' && field !== 'password';
  if (field === 'login' || field === 'password') return value.length <= 100; 
  if (field === 'label') return value.length <= 50;
  return true;
};

const isFormValid = computed(() => {
  return (
    isValid(newAccount.value.login, 'login') &&
    (newAccount.value.type !== 'Локальная' || isValid(newAccount.value.password, 'password'))
  );
});
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
}

@media (max-width: 425px) {
  .message {
    font-size: 10px;
    padding: 6px;
  }
  h1 {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .b-row {
    display: block;
  }
  .b-col {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
