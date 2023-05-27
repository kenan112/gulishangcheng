import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import { MessageBox } from 'element-ui';
import VueLazyload from 'vue-lazyload';

//按需引入element-ui
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'



import "@/mock/mockServe"
import "swiper/swiper-bundle.min.css"

//注册API
import * as API from '@/api/index'
//引入表单验证插件
import '@/plugins/validate'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.use(VueLazyload, {
  loading: 'https://www.16css.com/uploadfile/201910/e06d89d9f4f86f.gif'
})
Vue.config.productionTip = false

import myPlugins from '@/plugins/myPlugin';
Vue.use(myPlugins, {
  name: "upper"
})






new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  }
}).$mount('#app')
