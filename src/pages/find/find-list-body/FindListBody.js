import React, { Component } from 'react';
import FindListItem from '../find-list-item/FindListItem'

class FindListBody extends Component {
    render() {
        return (
            <ul>
                <FindListItem></FindListItem>
            </ul>
        );
    }
}

export default FindListBody;