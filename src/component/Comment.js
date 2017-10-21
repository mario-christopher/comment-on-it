import React from 'react';

import { CommentBox, Label } from '../element/index';
import { commentDate } from '../code/funcs';

export class Comment extends React.PureComponent {

    render() {
        let comment = this.props.comment;
        return (
            <CommentBox className='_col'>
                <div className='_row'>
                    <Label user>{comment.userName + ' : '}</Label>
                    <Label user>{commentDate(new Date(comment.dateTime)) + ' : '}</Label>
                </div>
                <Label>{comment.comment}</Label>
            </CommentBox>
        )
    }
}