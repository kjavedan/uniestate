import { createRouter, createWebHistory } from "vue-router";

import Home from '~/views/home'
import Properties from "~/views/properties";
import Gallery from "~/views/gallery"
import PropertyDetails from '~/views/details'
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
            path: '/property/:id',
            name: 'propertyDetails',
            component: PropertyDetails
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});

export default router;