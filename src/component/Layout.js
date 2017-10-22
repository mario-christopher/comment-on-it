import React from 'react';
import { connect } from 'react-redux';

import { styles, joinStyles } from '../code/style';
import { Header } from './Header';
import { CommentList } from './CommentList';
import { NewComment } from './NewComment';
import { Login } from './Login';

export class Layout extends React.PureComponent {

    render() {
        let showLogin = this.props.showLogin;

        return (
            <div style={styles.fontFamily}>
                {showLogin && <Login />}
                <div style={this.props.showLogin ? joinStyles(styles.col, styles.modalBg, styles.div) : joinStyles(styles.col, styles.div)}>
                    <Header header={this.props.header} />
                    <CommentList />
                    <NewComment />
                </div>
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