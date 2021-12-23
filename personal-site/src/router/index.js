import { createWebHistory, createRouter } from 'vue-router'
import mePage from '@/components/mePage.vue'
import AcompTimeLine from '@/components/AccompTimeLine.vue'
import Contact from '@/components/Contact.vue'

const routes = [
    { 
        path: '/', 
        name: 'mePage',
        component: mePage
    },
    {
        path: '/accomplishments',
        name: 'AccompTimeLine',
        component: AcompTimeLine
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;