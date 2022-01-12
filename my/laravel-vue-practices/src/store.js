import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { router } from './router/index'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: ""
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        },
        getToken(state){
            return state.token
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        initAuth({ commit }) {
            let token = localStorage.getItem("token")
            if (token) {
                commit("setToken", token)
                router.push('/')
            } else {
                router.push('/login')
                return false
            }
        },
        login({ commit }, authData) {
            return axios.post("http://localhost:8000/api/login", {
                email: authData.email,
                password: authData.password,
                password_confirmation: authData.password
            })
                .then((response) => {
                    commit("setToken", response.data.token)
                    localStorage.setItem("token", "Bearer "+response.data.token)
                });
        },
        logout({ commit }) {
            commit("clearToken")
            localStorage.removeItem("token")
        }
    }
})

export default store