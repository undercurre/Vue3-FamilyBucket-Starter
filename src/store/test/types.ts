import { QuestionWrapAnswer } from './../answer/types'

interface Test {
  answers: Array<QuestionWrapAnswer>
  finishTime: Date
  result: string
}

export interface RootState {
  tests: Array<Test>
}
