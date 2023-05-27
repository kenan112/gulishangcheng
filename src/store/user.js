import { getCode, userRegister, userLogin, getUserInfo, logOut } from '@/api'

export default {
    actions: {
        //获取验证码
        async getCode({ commit }, phone) {
            let result = await getCode(phone)
            if (result.code == 200) {
                commit('GETCODE', result.data)
            }
        },
        //用户注册
        async userRegister({ commit }, user) {
            let result = await userRegister(user)
            console.log(result);
            if (result.code == 200) {
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        //登陆业务
        async userLogin({ commit }, user) {
            let result = await userLogin(user)
            if (result.code == 200) {
                commit("USERLOGIN", result.data.token)
                localStorage.setItem('token', result.data.token)
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        //获取用户信息
        async getUserInfo({ commit }) {
            let result = await getUserInfo()
            if (result.code == 200) {
                commit("GETUSERINFO", result.data)
                return 'ok'
            }
            else {
                return Promise.reject(new Error('faile'))
            }
        },
        //退出登录
        async logOut({ commit }) {
            let result = await logOut()
            if (result.code == 200) {
                commit("CLEAR")
                return 'ok'
            } else {
                return Promise.reject(new Error('faile'))
            }
        }
    },
    mutations: {
        GETCODE(state, code) {
            state.code = code
        },
        USERLOGIN(state, token) {
            state.token = token
        },
        GETUSERINFO(state, userInfo) {
            state.userInfo = userInfo
        },
        CLEAR(state) {
            state.token = ''
            state.userInfo = {}
            localStorage.removeItem('token')
        }
    },
    state: {
        code: '',
        token: '',
        userInfo: {}
    },
    getters: {

    }
}