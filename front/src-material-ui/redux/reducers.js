import {combineReducers} from 'redux'

import {
    ADD_COMMENT,
    DELETE_COMMENT,
    RECEIVE_COMMENTS,
    CHANGE_USER_TYPE,
    CHANGE_USER_TYPE_TO_PROFILED,

    INCREMENT,
    DECREMENT
} from './action-types'

const initComments = []
function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.data]
        case DELETE_COMMENT:
            return state.filter((c, index) => index !== action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}

const initUserType = 1
function userType(state = initUserType, action) {
    // console.log('000000')
    // console.log('customerType', state, action)
    switch (action.type) {
        case CHANGE_USER_TYPE:
            return action.data
        case CHANGE_USER_TYPE_TO_PROFILED:
            return 2
        default:
            return state

    }
}


function counter(state = 0, action) {
    // console.log('counter', state, action)
    switch (action.type) {
        case INCREMENT:
            return state + action.number
        case DECREMENT:
            return state - action.number
        default:
            return state
    }
}


export default combineReducers({
    comments,
    userType,
    counter
})