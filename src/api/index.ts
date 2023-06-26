import { request } from '../utils/request'

interface LoginRes {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
  }
}

export async function login(identifier: string, password: string) {
  const res = await request<LoginRes>('POST', '/api/auth/local', {
    identifier,
    password,
  })
  return res
}
