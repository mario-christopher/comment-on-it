import axios from 'axios';

const webTaskUrl = 'https://wt-082838d7a891917e1675eb39715ccb0f-0.run.webtask.io/comment-on-it';

export const Actions = {
    LOGIN: 'User Login',
    LOGOUT: 'User Logout',

    ADD: 'Add Comment',
    ADD_LIST: 'Add Comment List',
    CLEAR_LIST: 'Clear out current comments.',

    APP_INFO: 'Set App Info',
    PROGRESS: 'Task in progress',
    SHOW_LOGIN: 'Show/Hide Login'
}

export const Method = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete'
}

export const actionCreator = (type, data, err) => {
    return {
        type, data, err
    };
}

export const asyncAction = (type, url, data, method) => {

    let _url = `${webTaskUrl}/${url}`;

    return (dispatch, state) => {
        let progress = {
            get: (method == Method.GET ? true : false),
            post: (method == Method.POST ? true : false)
        };
        dispatch(actionCreator(Actions.PROGRESS, progress, null));

        return (makeAsyncCall(_url, data, method)
            .then(resultData => {
                dispatch(actionCreator(type, resultData, null));
                return resultData;
            })
            .catch(err => {
                dispatch(actionCreator(ChatActions.ERR, null, err));
                console.error('Async call error : ', err);
            }))
            .then(() => {
                dispatch(actionCreator(Actions.PROGRESS, { get: false, post: false }, null));
            })
    }
}

const makeAsyncCall = (url, data, method) => {

    return axios({
        url, data, method,
    })
        .then(result => {
            return result.data;
        })
        .catch(err => {
            throw err;
        })
}