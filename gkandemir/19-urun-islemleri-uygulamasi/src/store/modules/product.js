import Vue from "vue"
import { router } from '../../router'

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products
    },
    getProduct(state) {

    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product)
    }
}

const actions = {
    initApp({ commit }) {
        Vue.http.get("https://vue-product-f3194-default-rtdb.europe-west1.firebasedatabase.app/products.json")
            .then((response) => {
                let data = response.body
                for (let key in data) {
                    data[key].key = key
                    commit("updateProductList", data[key])
                }
            })
    },
    saveProduct({ dispatch, commit, state }, product) {
        Vue.http.post("https://vue-product-f3194-default-rtdb.europe-west1.firebasedatabase.app/products.json",
            product)
            .then((response) => {
                //ürün listesinin güncellenmesi
                product.key = response.body.name;
                commit("updateProductList", product)

                //alış, satış, bakiye bilgilerinin güncellenmesi
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch("setTradeResult", tradeResult)

                //yönlendirme
                router.replace("/")
            })
    },
    sellProduct({ commit }, payload) {

    },
}

export default {
    state, getters, mutations, actions
}