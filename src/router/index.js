import { createRouter, createWebHistory } from "vue-router";

import Home from '~/views/home'
import Buy from "~/views/buy";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "home",
            component: Home,
        },
        {
            path: '/buy',
            name: "buy",
            component: Buy,
        },
        {
            path: '/rent',
            name: "rent",
            component: Home,
        },
        {
            path: '/projects',
            name: "projects",
            component: Home,
        },
        {
            path: '/about',
            name: "about",
            component: Home,
        },
        {
            path: '/contact',
            name: "contact",
            component: Home,
        },
    ],
});

export default router;