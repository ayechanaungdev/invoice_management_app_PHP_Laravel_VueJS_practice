import { createRouter,createWebHistory } from "vue-router";

import invoiceIndex from '../components/invoices/index.vue'

import invoiceNew from '../components/invoices/new.vue'

import notFound from '../components/NotFound.vue'

const routes=[
    {
        path:'/',
        component: invoiceIndex
    },

    // Route for new invoice
    {
      path: '/invoice/new',
      component: invoiceNew
    },
    
    // Route for 404 page not found
    {
      path: '/:pathMatch(.*)*',
      component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router