import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        getDoubleCounter(state) {
            return state.counter * 2
        },
        getCounterClick(state) {
            return state.counter + " kez tıklandı"
        }
    },
    mutations: {
        increaseCounter(state) {
            return state.counter += 1
        },
        decreaseCounter(state) {
            return state.counter -= 1
        },
    },
    actions: {
        increment({ commit }) {
            commit("increaseCounter")
        },
        decrement({ commit }) {
            commit("decreaseCounter")
        },
        incAsync({ commit }) {
            setTimeout(() => {
                commit("increaseCounter")
            }, 2000);
        }
    }
})