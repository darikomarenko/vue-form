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
            if (index >= 0 && index < this.accounts.length) {
                this.accounts[index] = account;
            }
        },
        deleteAccount(index) {
            if (index >= 0 && index < this.accounts.length) {
                this.accounts.splice(index, 1);
            }
        }
    },
    persist: true
});
