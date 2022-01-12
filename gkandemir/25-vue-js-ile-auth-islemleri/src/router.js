import Vue from "vue";
import VueRouter from "vue-router";
import store from './store'

import About from './pages/About.vue'
import Homepage from './pages/Homepage.vue'
import Auth from './pages/auth/Auth.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Homepage,
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/auth")
                }
            }
        },
        {
            path: "/about",
            component: About,
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/auth")
                }
            }
        },
        {
            path: "/auth",
            component: Auth
        }
    ],
    mode: "history"
})