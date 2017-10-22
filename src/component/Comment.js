import React from 'react';

import { styles, joinStyles } from '../code/style';
import { commentDate } from '../code/funcs';

export class Comment extends React.PureComponent {

    render() {
        let comment = this.props.comment;
        return (
            <div style={joinStyles(styles.col, styles.div2)}>
                <div style={styles.row}>
                    <label style={styles.label} >{comment.userName + ' : '}</label>
                    <label style={styles.label}>{commentDate(new Date(comment.dateTime)) + ' : '}</label>
                </div>
                <label style={styles.label2}>{comment.comment}</label>
            </div>
        )
    }
}