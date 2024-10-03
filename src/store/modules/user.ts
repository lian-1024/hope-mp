import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfo } from '@/types/user'

export const useUserInfoStore = defineStore('user', () => {
  /** 用户信息 */
  const userInfo = ref<UserInfo>()

  /** 设置用户信息 */
  const setUserInfo = (val: UserInfo) => {
    userInfo.value = val
  }

  return {
    userInfo,
    setUserInfo,
  }
}, {
  // 持久化存储用户信息
  persist: true,
})
