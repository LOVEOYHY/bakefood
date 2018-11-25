import React, { Component } from 'react';
import { Header, Picture, MoreBtn } from '@c/commons'

import {
    Search,
    Gift
} from '@assets/images'

import FindListBody from './find-list-body/FindListBody'

class FindContainer extends Component {
    render() {
        // console.log(FindIcon)
        return (
            <div>
                <Header
                    left = { <Picture type= {Search} /> }
                    right = { <Picture type= {Gift} /> }
                    >焙忘录</Header>
                <FindListBody></FindListBody>
                <MoreBtn />
            </div>
        );
    }
}

export default FindContainer;