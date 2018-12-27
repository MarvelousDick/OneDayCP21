import {
    ADD_COMMENT,
    DELETE_COMMENT,
    RECEIVE_COMMENTS,
    CHANGE_USER_TYPE,
    CHANGE_USER_TYPE_TO_PROFILED,
    CHANGE_USER_PROFILE,
    CHANGE_MATCHER_PROFILE,

    INCREMENT,
    DECREMENT,

} from './action-types'

import axios from 'axios'

export const addComment = (comment) => ({type: ADD_COMMENT, data: comment});

export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index});

const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments});
export const getComments = () => {
    return dispatch => {
        setTimeout(() => {
            const comments = [
                {
                    username: "Tom",
                    content: "ReactJS好难啊!",
                    id: Date.now()
                },
                {
                    username: "JACK",
                    content: "ReactJS还不错!",
                    id: Date.now() + 1
                }
            ];
            dispatch(receiveComments(comments))
        }, 1000)
    }
};

export const changeUserType = (type) => ({type: CHANGE_USER_TYPE, data: type});
export const changeUserTypeToProfiled = () => ({type: CHANGE_USER_TYPE_TO_PROFILED});
export const changeUserProfile = (userProfile) => ({type: CHANGE_USER_PROFILE, data: userProfile});

export const changeMatcherProfile = (matcherProfile) => ({type: CHANGE_MATCHER_PROFILE, data: matcherProfile});
//异步获取匹配对象的信息
export const receiveMatcherProfile = () => {

    return dispatch => {
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
            .then(json => {
                const initMatcherProfile = {
                    nickName: "nicky000",
                    photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608431072,669449145&fm=27&gp=0.jpg",
                    sex: "sex8",
                    matchSex: "sex9",
                    birthday: "1990-01-01",
                    wechatAccount: "temash",
                    university: "上海大学",
                    major: "电气工程及其自动化"
                };
                dispatch(changeMatcherProfile(initMatcherProfile));
                // console.log(json);
            });
    }
};

// 异步action creator(返回一个函数)
export const getUserInfo = (userInfo) => {
    return dispatch => {
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
            .then(json => console.log(json));
        console.log(userInfo);
        dispatch(changeUserType(1));
    }
};

export const increment = number => ({type: INCREMENT, number});
export const decrement = number => ({type: DECREMENT, number});

