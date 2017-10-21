import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { appReducer } from '../store/reducer';
import { Layout } from './Layout';
import { Label } from '../element/index';
import { Actions, Method, actionCreator } from '../store/action';

import '../style/style';

export class CommentOnIt extends React.PureComponent {

    content = () => {
        let store = createStore(
            appReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            applyMiddleware(thunk));

        let appInfo = {
            appId: this.props.appId,
            instanceId: this.props.instanceId,
            header: this.props.header
        };
        store.dispatch(actionCreator(Actions.APP_INFO, appInfo, null));

        if (this.props.appId) {
            return (
                <Provider store={store}>
                    <Layout header={this.props.header} />
                </Provider>
            )
        }
        else {
            return (
                <Label>Please obtain an AppId and use it with this Comment instance.</Label>
            )
        }
    }

    render = () => {
        return this.content();
    }
}

CommentOnIt.propType = {
    appId: PropTypes.string.isRequired,
    instanceId: PropTypes.string.isRequired
}