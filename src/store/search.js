import { getSearchInfo } from '@/api'
export default {
    // namespaced: true,
    actions: {
        async getSearchList(context, params) {
            let result = await getSearchInfo(params)
            if (result.code == 200) {
                context.commit('GETSEARCHLIST', result.data)
            }
        }
    },
    mutations: {
        GETSEARCHLIST(state, SearchList) {
            state.SearchList = SearchList
        }
    },

    state: {
        SearchList: {}
    },

    getters: {
        attrsList(state) {
            return state.SearchList.attrsList || []
        },
        goodsList(state) {
            return state.SearchList.goodsList || []
        },
        trademarkList(state) {
            return state.SearchList.trademarkList || []
        }
    }
}