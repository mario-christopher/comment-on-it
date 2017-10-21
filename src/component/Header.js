import React from 'react';

import { LoginButton } from './LoginButton';
import { Title } from '../element/index';

export class Header extends React.PureComponent {

    render() {
        return (
            <div className='_row header'>
                <Title className='_stretch'>{this.props.header}</Title>
                <LoginButton />
            </div>
        )
    }
}