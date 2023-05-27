import axios from 'axios'
import nProgress from 'nprogress'
import "nprogress/nprogress.css"
import store from '@/store'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    }
    nProgress.start()
    return config
})

requests.interceptors.response.use((response) => {
    nProgress.done()
    return response.data

},
    (error) => {
        return Promise.reject(new error('faile'))
    })

export default requests