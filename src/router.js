import { createRouter, createWebHistory } from "vue-router";
import Auth from '/src/modules/auth';

const routes = [
    { path: "/login", component: () => import("./pages/login.vue"), meta: { public: true } },
    { path: "/create", component: () => import("./pages/create.vue") },
    { path: "/list", component: () => import("./pages/list.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (!(to.meta.public === true) && !Auth.isAuth()) {
        return { path: "/login" }
    } else {
        return true;
    }
});

export default router;