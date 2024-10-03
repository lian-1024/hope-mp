/// <reference types="vite/client" />

// 在 .env 文件中定义环境变量 之后需要在这里定义类型 获取提示
/** 环境变量 */
interface ImportMetaEnv {
  /** 请求基地址 */
  readonly BENEFIT_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMeta
}
