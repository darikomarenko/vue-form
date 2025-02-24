import { defineStore } from 'pinia';

export const useAccountStore = defineStore('accountStore', {
  state: () => ({
    accounts: []
  }),
  actions: {
    addAccount(account) {
      this.accounts.push(account);
    },
    updateAccount(index, account) {
      this.accounts[index] = account;
    },
    deleteAccount(index) {
      this.accounts.splice(index, 1);
    }
  },
  persist: true
});
