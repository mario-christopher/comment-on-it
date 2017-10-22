import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { styles } from '../code/style';
import { appReducer } from '../store/reducer';
import { Layout } from './Layout';
import { Actions, Method, actionCreator, asyncAction } from '../store/action';

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

export class CommentOnIt extends React.PureComponent {

    componentWillMount = () => {
        this.updateAppInfo(this.props);
    }

    componentWillReceiveProps = (nextProps, nextContext) => {
        this.updateAppInfo(nextProps);
    }

    updateAppInfo = (props) => {
        let appInfo = {
            appId: props.appId,
            instanceId: props.instanceId,
            header: props.header
        };
        store.dispatch(actionCreator(Actions.APP_INFO, appInfo, null));
        store.dispatch(actionCreator(Actions.CLEAR_LIST, null, null));
        store.dispatch(asyncAction(Actions.ADD_LIST, `comments?appId=${appInfo.appId}&instanceId=${appInfo.instanceId}`, null, Method.GET));
    }

    content = () => {
        if (this.props.appId) {
            return (
                <Layout header={this.props.header} />
            )
        }
        else {
            return (
                <label style={styles.label}>Please obtain an AppId and use it with this Comment instance.</label>
            )
        }
    }

    render = () => {
        return (
            <Provider store={store}>
                {this.content()}
            </Provider>
        );
    }
}

CommentOnIt.propType = {
    appId: PropTypes.string.isRequired,
    instanceId: PropTypes.string.isRequired
}