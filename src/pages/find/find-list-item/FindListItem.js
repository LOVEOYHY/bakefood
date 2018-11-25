import React, { Component } from 'react';
import {
    FindListItemStyle,
    FindListItemCategory,
    FindListItemTitle
} from './styledComponent'

class FindListItem extends Component {
    render() {
        return (
            <FindListItemStyle>
                <FindListItemCategory>
                    <div>烤箱菜</div>
                    <div>收藏&nbsp;-&nbsp;评论</div>
                </FindListItemCategory>
                <FindListItemTitle>花蛤培根黄油土豆烧</FindListItemTitle>
            </FindListItemStyle>
        );
    }
}

export default FindListItem;