import { defineStore } from 'pinia'
import type { RootState } from './types'
import piniaPersistConfig from '../piniaPersist'

export const useAnswerStore = defineStore('answer', {
  state: (): RootState => ({
    answers: [],
  }),
  getters: {},
  actions: {},
  persist: piniaPersistConfig('answerStorage'),
})
