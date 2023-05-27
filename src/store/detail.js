import { getGooodInfo, addOrUpdateShopCart } from '@/api'
import { getUUID } from '@/utils/uuid_token'
export default {
    // namespaced: true,
    actions: {
        async getGooodInfo(context, skuId) {
            let result = await getGooodInfo(skuId)
            if (result.code == 200) {
                context.commit('GETGOODINFO', result.data)
            }
        },
        async addOrUpdateShopCart(context, { skuId, skuNum }) {
            let result = await addOrUpdateShopCart(skuId, skuNum)
            if (result.code === 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error("faile"))
            }
        }
    },
    mutations: {
        GETGOODINFO(state, goodInfo) {
            state.goodInfo = goodInfo
        }
    },

    state: {
        goodInfo: {},
        uuid_token: getUUID()
    },

    getters: {
        categoryView(state) {
            return state.goodInfo.categoryView || {}
        },
        skuInfo(state) {
            return state.goodInfo.skuInfo || {}
        },
        spuSaleAttrList(state) {

            return state.goodInfo.spuSaleAttrList || []
        }
    }
}