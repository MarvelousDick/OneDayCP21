import {
    ADD_COMMENT,
    DELETE_COMMENT,
    RECEIVE_COMMENTS,
    CHANGE_USER_TYPE,
    CHANGE_USER_TYPE_TO_PROFILED,

    INCREMENT,
    DECREMENT
} from './action-types'

export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})
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
            ]
            dispatch(receiveComments(comments))
        }, 1000)
    }
}

export const changeUserType = (type) => ({type: CHANGE_USER_TYPE, data: type})
export const changeUserTypeToProfiled = () => ({type: CHANGE_USER_TYPE_TO_PROFILED})

export const increment = number => ({type: INCREMENT, number})
export const decrement = number => ({type: DECREMENT, number})