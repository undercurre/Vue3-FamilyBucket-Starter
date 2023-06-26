import { defineStore } from 'pinia'
import type { RootState } from './types'
import piniaPersistConfig from '../piniaPersist'

export const useTestStore = defineStore('test', {
  state: (): RootState => ({
    tests: [],
  }),
  getters: {},
  actions: {},
  persist: piniaPersistConfig('testStorage'),
})
