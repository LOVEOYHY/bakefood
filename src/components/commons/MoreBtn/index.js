import React, { Component } from 'react';
import {MoreBtnBox} from './styledComponent'

class MoreBtn extends Component {
    render () {
        return (
            <MoreBtnBox>
                查看更多&nbsp;
                <i className="fa fa-chevron-down"></i>
            </MoreBtnBox>
        )
    }
}

export default MoreBtn