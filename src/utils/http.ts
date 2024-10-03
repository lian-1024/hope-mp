import axios from 'axios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'

const instance = axios.create({
  baseURL: import.meta.env.BENEFIT_BASE_URL, // 基础URL
  timeout: 5000, // 超时时间
  adapter: createUniAppAxiosAdapter(), // 添加 axios adapter 适配器
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export {
  instance,
}
