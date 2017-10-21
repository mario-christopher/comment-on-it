import { combineReducers } from 'redux';
import { messageReducer } from '../store/reducer';

import { Actions } from './action';

const initState = {
    userName: null,
    comments: [],
    err: null,
    appInfo: {
        appId: null,
        instanceId: null
    },
    progress: {
        get: false,
        post: false
    },
    showLogin: false
};

const commentReducer = (state = initState, action) => {

    switch (action.type) {

        case Actions.LOGIN:
            {
                return { ...state, userName: action.data };
            }

        case Actions.LOGOUT:
            {
                return { ...state, userName: null };
            }

        case Actions.ADD:
            {
                return { ...state, comments: [...state.comments, action.data] };
            }

        case Actions.ADD_LIST:
            {
                return { ...state, comments: [...action.data] };
            }

        case Actions.APP_INFO:
            {
                return { ...state, appInfo: action.data };
            }

        case Actions.PROGRESS:
            {
                return { ...state, progress: action.data };
            }

        case Actions.SHOW_LOGIN:
            {
                return { ...state, showLogin: action.data };
            }

        default:
            return state;
    }
}

export const appReducer = combineReducers({
    comments: commentReducer
});