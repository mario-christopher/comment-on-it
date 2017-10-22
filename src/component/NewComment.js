import React from 'react';
import { connect } from 'react-redux';

import { styles, joinStyles } from '../code/style';
import { Progress } from '../element/index';
import { Actions, Method, asyncAction } from '../store/action';

export class NewComment extends React.PureComponent {

    onKeyPress = (e) => {
        if (e.charCode == 13)
            this.onAddCommentClicked();
    }

    onAddCommentClicked = () => {
        if (this.textInput.value.trim().length > 0) {
            let newComment = {
                userName: this.props.userName,
                comment: this.textInput.value,
                dateTime: Date.now(),
                appInfo: this.props.appInfo
            };
            this.props.dispatch(asyncAction(Actions.ADD, 'comments', newComment, Method.POST));
        }
        this.textInput.value = '';
    }

    content = () => {
        let userName = this.props.userName;
        if (userName) {
            return (
                <div style={styles.row}>
                    <input style={joinStyles(styles.textBox, styles.stretch)}
                        autoFocus type='text'
                        onKeyPress={this.onKeyPress}
                        placeholder='your comment'
                        ref={(input) => { this.textInput = input; }} />
                    <div style={styles.commentAdd}>
                        {this.props.progress.post ?
                            <Progress>I</Progress>
                            :
                            <button style={styles.button} onClick={this.onAddCommentClicked} >Add</button>
                        }
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <label style={styles.label}>Login to add your comments.</label>
                </div>
            );
        }
    }

    render() {
        return this.content();
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.comments.userName,
        appInfo: state.comments.appInfo,
        progress: state.comments.progress
    };
}
NewComment = connect(mapStateToProps)(NewComment);