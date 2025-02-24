<template>
  <div class="container">
    <h1>Учетные записи</h1>
    <b-button @click="addNewAccount" variant="primary">+</b-button>

    <div class="message mt-2">
      <span>
        <i class="bi bi-question-circle"></i>
        Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
      </span>
    </div>

    <div v-for="(account, index) in accounts" :key="index" class="mt-3">
      <b-form @submit.prevent="saveAccount(index)">
        <b-row>
          <b-col>
            <b-form-group label="Метка">
              <b-form-input v-model="account.label" :state="isValid(account.label)" @blur="validateAccount(index)" placeholder="Метка" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Тип записи">
              <b-form-select v-model="account.type" :options="accountTypes" @change="handleTypeChange(index)" />
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Логин">
              <b-form-input v-model="account.login" :state="isValid(account.login)" @blur="validateAccount(index)" placeholder="Логин" />
            </b-form-group>
          </b-col>

          <b-col v-if="account.type === 'Локальная'">
            <b-form-group label="Пароль">
              <b-form-input v-model="account.password" :state="isValid(account.password)" @blur="validateAccount(index)" placeholder="Пароль" type="password" />
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
import { ref } from 'vue';
import { useAccountStore } from '../../stores/accountStore';
import { BButton, BForm, BFormGroup, BFormInput, BFormSelect, BRow, BCol } from 'bootstrap-vue-next';

const accountTypes = [
  { value: 'LDAP', text: 'LDAP' },
  { value: 'Локальная', text: 'Локальная' }
];

const accountStore = useAccountStore();
const accounts = ref(accountStore.accounts);

const addNewAccount = () => {
  const newAccount = {
    label: '',
    type: 'LDAP',
    login: '',
    password: null
  };
  accountStore.addAccount(newAccount);
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

const isValid = (value) => {
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
