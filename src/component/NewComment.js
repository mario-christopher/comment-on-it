import React from 'react';
import { connect } from 'react-redux';

import { Storage } from '../code/local-storage';
import { Label, TextBox, Button, Progress } from '../element/index';
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
                <div className='_row'>
                    <TextBox autoFocus type='text'
                        onKeyPress={this.onKeyPress}
                        placeholder='your comment' className='_stretch'
                        innerRef={(input) => { this.textInput = input; }} />
                    <div className='comment-add'>
                        {this.props.progress.post ?
                            <Progress>I</Progress>
                            :
                            <Button primary onClick={this.onAddCommentClicked} >Add</Button>
                        }
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Label>Login to add your comments.</Label>
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