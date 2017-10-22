import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { styles } from '../code/style';
import { Comment } from './Comment';
import { Progress } from '../element/index';

export class CommentList extends React.PureComponent {

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
                    <label style={styles.label}>Be the first to add a comment.</label>
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
        progress: state.comments.progress
    };
}
CommentList = connect(mapStateToProps)(CommentList);