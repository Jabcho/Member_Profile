import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/MainPage.vue")
    },
    {
        path: "/member",
        component: () => import("@/views/MemberPage.vue")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});