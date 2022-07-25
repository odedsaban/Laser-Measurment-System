import userDataReducer from './userdata'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    userData : userDataReducer
})

export default allReducers