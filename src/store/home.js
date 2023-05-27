import { getBaseCategoryList, getBannerList, getFloorList } from '@/api'
export default {
    // namespaced: true,
    actions: {
        async categoryList(context) {
            let result = await getBaseCategoryList()
            if (result.code == 200) {
                context.commit('CATEGORYLIST', result.data)
            }
        },
        async getBannerList(context) {
            let result = await getBannerList()
            if (result.code == 200) {
                context.commit('BANNERLIST', result.data)
            }
        },
        async getFloorList(context) {
            let result = await getFloorList()
            if (result.code == 200) {
                context.commit('FLOORLIST', result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        BANNERLIST(state, bannerList) {
            state.bannerList = bannerList
        },
        FLOORLIST(state, floorList) {
            state.floorList = floorList
        }
    },
    state: {
        categoryList: [],
        bannerList: [],
        floorList: []
    },
    getters: {

    }
}