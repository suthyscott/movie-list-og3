import {configureStore} from '@reduxjs/toolkit'

import authReducer from './authReducer.js'

export default configureStore({
    reducer: authReducer
})