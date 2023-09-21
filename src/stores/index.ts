import { defineStore } from 'pinia'

export const indexStore = defineStore('index', {
  state: () => ({ isLogin: false }),

  actions: {
    setLogin() {
      this.isLogin = true
    }
  }
})
