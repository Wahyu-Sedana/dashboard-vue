import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Dashboard from '@/views/DashboardView.vue'
import Report from '@/views/ReportView.vue'
import DataView from '@/views/DataView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: LoginView
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },

    {
        path: '/report',
        name: 'report',
        component: Report
    },

    {
        path: '/data',
        name: 'data',
        component: DataView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router