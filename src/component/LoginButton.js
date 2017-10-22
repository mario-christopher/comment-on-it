import React from 'react';
import { connect } from 'react-redux';

import { styles } from '../code/style';
import { Storage } from '../code/local-storage';
import { Actions, actionCreator } from '../store/action';

export class LoginButton extends React.PureComponent {

    componentWillMount = () => {
        let userName = Storage.get();
        if (userName)
            this.props.dispatch(actionCreator(Actions.LOGIN, userName, null));
    }

    onShowLoginClicked = () => {
        this.props.dispatch(actionCreator(Actions.SHOW_LOGIN, true, null));
    }

    onLogoutClicked = () => {
        this.props.dispatch(actionCreator(Actions.LOGOUT, null, null));
        Storage.clear();
    }

    content = () => {
        let userName = this.props.userName;
        if (userName) {
            return (
                <div style={styles.row}>
                    <button title='Logout' style={styles.button} onClick={this.onLogoutClicked} >{'Not ' + userName + ' ? Sign out.'}</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <button title='Login to add your comments.' style={styles.button} onClick={this.onShowLoginClicked} >Login</button>
                </div>
            );
        }
    }

    render = () => {
        return this.content();
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.comments.userName
    };
}
LoginButton = connect(mapStateToProps)(LoginButton);