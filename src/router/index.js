import { createRouter, createWebHistory } from "vue-router";

import Home from '~/views/home'
import Properties from "~/views/properties";
import Gallery from "~/views/gallery"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "home",
            component: Home,
        },
        {
            path: '/properties',
            name: "properties",
            component: Properties,
        },
        {
            path: '/gallery',
            name: "gallery",
            component: Gallery,
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
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});

export default router;