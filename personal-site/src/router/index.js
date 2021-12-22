import { createWebHistory, createRouter } from 'vue-router'
import mePage from '../components/mePage.vue'

const routes = [
    { 
        path: '/', 
        name: 'mePage',
        component: mePage
    },
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;