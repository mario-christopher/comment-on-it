import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Comment } from './Comment';
import { Label, Progress } from '../element/index';
import { Actions, Method, asyncAction } from '../store/action';

export class CommentList extends React.PureComponent {

    componentWillMount = () => {
        this.props.dispatch(asyncAction(Actions.ADD_LIST, `comments?appId=${this.props.appInfo.appId}&instanceId=${this.props.appInfo.instanceId}`, null, Method.GET));
    }

    content = () => {
        let comments = this.props.comments;
        if (comments.length > 0) {
            return (
                <div>
                    {comments.map(comment => <Comment key={comment._id} comment={comment} />)}
                </div>
            );
        }
        else {
            return (
                <div>
                    <Label>Be the first to add a comment.</Label>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.props.progress.get && <Progress>I</Progress>}
                {this.content()}
            </div>
        );
    }
}

CommentList.propType = {
    comments: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
        appInfo: state.comments.appInfo,
        progress: state.comments.progress
    };
}
CommentList = connect(mapStateToProps)(CommentList);