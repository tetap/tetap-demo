import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const libs: any = import.meta.glob('./libs/*.ts', { eager: true })

const routes: RouteRecordRaw[] = []
for (const lib in libs) {
  routes.push(...libs[lib].default)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
