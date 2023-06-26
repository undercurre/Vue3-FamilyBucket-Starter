import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { useUserStore } from '../store/user'

const userStore = useUserStore()

// 创建一个 Axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:1337',
  // 其他配置选项
})

// 设置默认的请求头，包括 token
axiosInstance.defaults.headers.common[
  'Authorization'
] = `Bearer ${userStore.token}`

// 封装的请求函数
export const request = async <T>(
  method: string,
  url: string,
  data?: unknown
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url,
      data,
    })

    return response.data
  } catch (error) {
    // 处理错误
    console.error(error)
    throw error
  }
}
