import React from 'react';

import { styles, joinStyles } from '../code/style';
import { LoginButton } from './LoginButton';

export class Header extends React.PureComponent {

    render() {
        return (
            <div style={joinStyles(styles.row, styles.header)}>
                <label style={joinStyles(styles.stretch, styles.title)}>{this.props.header}</label>
                <LoginButton />
            </div>
        )
    }
}