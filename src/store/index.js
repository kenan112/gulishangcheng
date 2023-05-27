import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import search from './search'
import home from './home'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
export default new Vuex.Store({
    modules: {
        search: search,
        home: home,
        detail: detail,
        shopcart: shopcart,
        user: user,
        trade: trade
    }
})