import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, reject, resolve) {
    if (reject && resolve) {
        originPush.call(this, location, reject, resolve)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, reject, resolve) {
    if (reject && resolve) {
        originReplace.call(this, location, reject, resolve)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
    let token = localStorage.getItem('token')
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('logOut')
                    next('/login')
                }
            }
        }
    } else {
        if (to.path.includes('/trade') || to.path.includes('/pay') || to.path.includes('/center')) {
            next('/login?redirect=' + to.path)
        } else {
            next()
        }
    }
})




export default router