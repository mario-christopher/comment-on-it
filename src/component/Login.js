import React from 'react';
import { connect } from 'react-redux';

import { styles, joinStyles } from '../code/style';
import { Storage } from '../code/local-storage';
import { Actions, actionCreator } from '../store/action';

export class Login extends React.PureComponent {

    onKeyPress = (e) => {
        if (e.charCode == 13)
            this.onLoginClicked();
    }

    onLoginClicked = () => {
        let userName = this.userName.value;
        let pwd = this.pwd.value;
        if (userName && pwd) {
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
            <div style={styles.loginParent}>
                <div style={styles.center}>
                    <div style={joinStyles(styles.col, styles.login)}>
                        <div style={styles.header}>
                            <label style={joinStyles(styles.stretch, styles.title)}>Login</label>
                        </div>
                        <input autoFocus type='text'
                            placeholder='user name'
                            style={styles.textBox}
                            ref={(input) => { this.userName = input; }} />

                        <input type='password'
                            onKeyPress={this.onKeyPress}
                            style={styles.textBox}
                            ref={(input) => { this.pwd = input; }} />

                        <div style={styles.row}>
                            <button style={styles.button} onClick={this.onLoginClicked} >Login</button>
                            <button style={styles.button} onClick={this.onCancelClicked} >Cancel</button>
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