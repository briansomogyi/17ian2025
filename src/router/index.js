import { createRouter, createWebHistory } from 'vue-router'
import SocialStatPage from "../pages/SocialStatPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'social',
            component: SocialStatPage
        },
        {
            path: '/product',
            name: 'product',
            component: () => import('../pages/ProductPage.vue')
        }
    ]
})

export default router