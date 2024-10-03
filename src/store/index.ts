import { createPinia } from 'pinia'
import persisted from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(persisted)

export default pinia
export * from './modules/user'
