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
    nickName: "nick",
    photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608431072,669449145&fm=27&gp=0.jpg",
    sex: "sex8",
    matchSex: "sex9",
    birthday: "1990-01-01",
    wechatAccount: "temash",
    university: "上海大学",
    major: "电气工程及其自动化"
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