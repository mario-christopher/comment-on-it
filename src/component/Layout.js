import React from 'react';

import { Header } from './Header';
import { CommentList } from './CommentList';
import { NewComment } from './NewComment';
import { Div, Title } from '../element/index';

import '../style/style';

export class Layout extends React.PureComponent {

    render() {
        return (
            <Div className='_col'>
                <Header header={this.props.header}/>
                <hr />
                <CommentList />
                <NewComment />
            </Div>
        );
    }
}