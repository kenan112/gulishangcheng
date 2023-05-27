import requests from "./request";
import mockRequests from './mock'

export const getBaseCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const getBannerList = () => mockRequests({ url: '/banner', method: 'get' })

export const getFloorList = () => mockRequests({ url: '/floor', method: 'get' })

export const getSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

export const getGooodInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

export const addOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })

export const getCartList = () => requests({ url: '/cart/cartList', method: "get" })

export const deleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" })

export const updateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" })

export const getCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

export const userRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

export const userLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

export const getUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

export const logOut = () => requests({ url: '/user/passport/logout', method: 'get' })

export const addressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

export const orderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

export const submitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

export const getPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

export const queryPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

export const myOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
