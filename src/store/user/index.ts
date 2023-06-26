import { defineStore } from 'pinia'
import type { RootState } from './types'
import piniaPersistConfig from '../piniaPersist'

export const useUserStore = defineStore('user', {
  state: (): RootState => ({
    userInfo: {
      id: 0,
      username: '',
      email: '',
      provider: '',
      confirmed: true,
      blocked: false,
      createdAt: '',
      updatedAt: '',
    },
    token: '',
  }),
  getters: {},
  actions: {
    async setUserInfo() {
      // 这里可以发起请求
      console.log('发起getUserInfo请求')
    },
  },
  persist: piniaPersistConfig('userStorage'),
})
