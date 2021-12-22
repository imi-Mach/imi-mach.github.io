import { createWebHistory, createRouter } from 'vue-router'
import mePage from '../components/mePage.vue'
import AcompTimeLine from '../components/AcompTimeLine.vue'

const routes = [
    { 
        path: '/', 
        name: 'mePage',
        component: mePage
    },
    {
        path: '/acomplishments',
        name: 'AcompTimeLine',
        component: AcompTimeLine
    }
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;