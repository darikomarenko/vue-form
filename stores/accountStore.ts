import { defineStore } from 'pinia';

interface Account {
  label: string;
  type: 'LDAP' | 'Локальная';
  login: string;
  password: string;
}

export const useAccountStore = defineStore('accountStore', {
  state: () => ({
    accounts: [] as Account[]
  }),

  actions: {
    addAccount(account: Account) {
      this.accounts.push(account);
    },
    updateAccount(index: number, account: Account) {
      if (index >= 0 && index < this.accounts.length) {
        this.accounts[index] = account;
      }
    },
    deleteAccount(index: number) {
      if (index >= 0 && index < this.accounts.length) {
        this.accounts.splice(index, 1);
      }
    }
  },

  persist: true
});
