import {combineReducers} from 'redux'

import {
    ADD_COMMENT,
    DELETE_COMMENT,
    RECEIVE_COMMENTS,
    CHANGE_USER_TYPE,
    CHANGE_USER_TYPE_TO_PROFILED,
    CHANGE_USER_PROFILE,
    CHANGE_MATCHER_PROFILE,
    GET_MATCHER_PROFILE,

    INCREMENT,
    DECREMENT,
} from './action-types'

const initComments = []

function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.data];
        case DELETE_COMMENT:
            return state.filter((c, index) => index !== action.data);
        case RECEIVE_COMMENTS:
            return action.data;
        default:
            return state
    }
}

const initUserType = 1;

function userType(state = initUserType, action) {
    // console.log('000000')
    // console.log('customerType', state, action)
    switch (action.type) {
        case CHANGE_USER_TYPE:
            return action.data;
        case CHANGE_USER_TYPE_TO_PROFILED:
            return 2;
        default:
            return state

    }
}

const initUserProfile = {
    "birthday": null,
    "createtime": null,
    "headimgUrl": null,
    "id": null,
    "major": null,
    "matchSex": null,
    "nickName": null,
    "openId": null,
    "sex": null,
    "university": "上海大学",
    "userStatus": null,
    "wechatId": null
};

function userProfile(state = initUserProfile, action) {
    // console.log('UserProfile.jsx', state, action);
    switch (action.type) {
        case CHANGE_USER_PROFILE:
            return action.data;
        default:
            return state;
    }
}

function matcherProfile(state = [], action) {
    // console.log(action.data);
    switch (action.type) {
        case CHANGE_MATCHER_PROFILE:
            return action.data;
        default:
            return state;
    }
}


function counter(state = 0, action) {
    // console.log('counter', state, action);
    switch (action.type) {
        case INCREMENT:
            return state + action.number;
        case DECREMENT:
            return state - action.number;
        default:
            return state
    }
}


export default combineReducers({
    comments,
    userType,
    userProfile,
    matcherProfile,
    counter
})