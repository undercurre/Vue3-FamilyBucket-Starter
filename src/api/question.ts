/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-22 01:25:40
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-22 18:08:56
 * @FilePath: \teick\src\api\question.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from '../utils/request'
import { data } from '../config/question'

export interface Selector {
  id: number
  attributes: {
    text: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface Question {
  id: number
  attributes: {
    content: string
    selectors: {
      data: Array<Selector>
    }
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface GetQuestionRes {
  data: Array<Question>
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export async function getQuestion() {
  return data
  return await request<GetQuestionRes>('GET', '/api/questions')
}
