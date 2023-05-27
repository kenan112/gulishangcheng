import axios from 'axios'
import nProgress from 'nprogress'
import "nprogress/nprogress.css"

const mockRequests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

mockRequests.interceptors.request.use((config) => {
    nProgress.start()
    return config
})

mockRequests.interceptors.response.use((response) => {
    nProgress.done()
    return response.data

},
    (error) => {
        return Promise.reject(new error('faile'))
    })

export default mockRequests