import { getCartList, deleteCart, updateCheckedById } from '@/api'

export default {
    actions: {
        async getCartList({ commit }) {
            let result = await getCartList()
            if (result.code == 200) {
                commit("GETCARTLIST", result.data)
            }
        },
        async deleteCartListBySkuId({ commit }, skuId) {
            let result = await deleteCart(skuId)
            if (result.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error("faile"))
            }
        },
        async updateCheckedById({ commit }, { skuId, isChecked }) {
            let result = await updateCheckedById(skuId, isChecked)
            if (result.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error("faile"))
            }
        },
        deleteAllCheckedCart({ getters, dispatch }) {
            let allPromise = []
            getters.cartList.cartInfoList.forEach((item) => {
                let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
                allPromise.push(promise)
            })
            return Promise.all(allPromise)
        },
        changeAll({ getters, dispatch }, isChecked) {
            let allPromise = []
            getters.cartList.cartInfoList.forEach((item) => {
                let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
                allPromise.push(promise)
            })
            return Promise.all(allPromise)
        }
    },
    mutations: {
        GETCARTLIST(state, cartList) {
            state.cartListInfo = cartList
        }
    },
    state: {
        cartListInfo: []
    },
    getters: {
        cartList(state) {
            return state.cartListInfo[0] || {}
        },
    }
}