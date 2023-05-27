import { addressInfo, orderInfo } from '@/api'

export default {
    actions: {
        async getUserAddress({ commit }) {
            let result = await addressInfo()
            if (result.code == 200) {
                commit("GETUSERADDRESS", result.data)
            }
        },
        async getOrderInfo({ commit }) {
            let result = await orderInfo()
            if (result.code == 200) {
                commit("GETORDERINFO", result.data)
            }
        }
    },
    mutations: {
        GETUSERADDRESS(state, adress) {
            state.adress = adress
        },
        GETORDERINFO(state, orderInfo) {
            state.orderInfo = orderInfo
        }
    },
    state: {
        adress: [],
        orderInfo: {}
    },
    getters: {

    }
}