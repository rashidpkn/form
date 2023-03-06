import {configureStore} from '@reduxjs/toolkit'
import formSlice from './slice/formSlice'
// import utilSlice from './slice/utilSlice'
const store = configureStore({
    reducer:{
        form:formSlice,
        // util:utilSlice
    }
})

export default store