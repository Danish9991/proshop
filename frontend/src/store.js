import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import {productListReducer, productUpdateReducer, productReviewCreateReducer, productCreateReducer, productDetailsReducer, productDeleteReducer} from './reducers/productReducers'

import {cartReducer} from './reducers/cartReducers'

import {userLoginReducer, deleteUserReducer, userUpdateReducer, userListReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './reducers/userReducers'

import { orderCreateReducer, orderDeliverReducer,  orderListReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    productDelete : productDeleteReducer,
    productCreate : productCreateReducer,
    productUpdate : productUpdateReducer,
    productReviewCreate : productReviewCreateReducer, 
    cart : cartReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userList : userListReducer,
    userUpdate : userUpdateReducer,
    deleteUser : deleteUserReducer,
    orderCreate : orderCreateReducer,
    orderDetail : orderDetailsReducer,
    orderPay : orderPayReducer,
    orderDeliver : orderDeliverReducer,
    orderListMy : orderListMyReducer,
    orderList : orderListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = { 
  cart: {cartItems: cartItemsFromStorage, shippingAddress : shippingAddressFromStorage},
  userLogin : {userInfo : userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

