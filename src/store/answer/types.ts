/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-22 01:25:40
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-22 17:52:31
 * @FilePath: \teick\src\store\answer\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Question } from '../../api/question'

export interface QuestionWrapAnswer extends Question {
  answer: string
}

export interface RootState {
  answers: Array<QuestionWrapAnswer>
}
