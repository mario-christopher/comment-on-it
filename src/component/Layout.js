import React from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import { CommentList } from './CommentList';
import { NewComment } from './NewComment';
import { Div, Title } from '../element/index';
import { Login } from './Login';

import '../style/style';

export class Layout extends React.PureComponent {

    render() {
        let showLogin = this.props.showLogin;

        return (
            <div>
                {showLogin && <Login />}
                <Div className={this.props.showLogin ? '_col modal-bg' : '_col'}>
                    <Header header={this.props.header} />
                    <hr />
                    <CommentList />
                    <NewComment />
                </Div>               
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        showLogin: state.comments.showLogin
    };
}
Layout = connect(mapStateToProps)(Layout);