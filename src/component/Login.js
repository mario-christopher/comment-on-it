import React from 'react';
import { connect } from 'react-redux';

import { Storage } from '../code/local-storage';
import { Title, TextBox, Button } from '../element/index';
import { Actions, actionCreator } from '../store/action';

export class Login extends React.PureComponent {

    onKeyPress = (e) => {
        if (e.charCode == 13)
            this.onLoginClicked();
    }
    
    onLoginClicked = () => {
        let userName = this.userName.value;
        let pwd = this.pwd.value;
        if (userName && pwd){
            this.props.dispatch(actionCreator(Actions.LOGIN, userName, null));
            Storage.set(userName);
            this.props.dispatch(actionCreator(Actions.SHOW_LOGIN, false, null));
        }
    }

    onCancelClicked = () => {
        this.props.dispatch(actionCreator(Actions.SHOW_LOGIN, false, null));
    }

    render() {
        return (
            <div className='login-parent'>
                <div className='center'>
                    <div className='_col login'>
                        <div className='header'>
                            <Title className='_stretch'>Login</Title>
                        </div>
                        <TextBox autoFocus type='text'
                            placeholder='user name'
                            className='_stretch'
                            innerRef={(input) => { this.userName = input; }} />

                        <TextBox type='password'
                            onKeyPress={this.onKeyPress}
                            className='_stretch'
                            innerRef={(input) => { this.pwd = input; }} />

                        <div className='_row'>
                            <Button primary onClick={this.onLoginClicked} >Login</Button>
                            <Button onClick={this.onCancelClicked} >Cancel</Button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
}
Login = connect(mapStateToProps)(Login);