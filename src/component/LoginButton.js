import React from 'react';
import { connect } from 'react-redux';

import { Storage } from '../code/local-storage';
import { Button, Label } from '../element/index';
import { Actions, actionCreator } from '../store/action';

export class LoginButton extends React.PureComponent {

    componentWillMount = () => {
        let userName = Storage.get();
        if (userName)
            this.props.dispatch(actionCreator(Actions.LOGIN, userName, null));
    }

    onLoginClicked = () => {
        let userName = 'Martha';
        this.props.dispatch(actionCreator(Actions.LOGIN, userName, null));
        Storage.set(userName);
    }

    onLogoutClicked = () => {
        this.props.dispatch(actionCreator(Actions.LOGOUT, null, null));
        Storage.clear();
    }

    content = () => {
        let userName = this.props.userName;
        if (userName) {
            return (
                <div className='_row'>
                    <Button title='Logout.' onClick={this.onLogoutClicked} >{'Not ' + userName + ' ? Sign out.'}</Button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Button title='Login to add your comments.' onClick={this.onLoginClicked} >Login</Button>
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