import React, { Component } from 'react';
import { HeaderContainer } from './styledComponent'


class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <div className = "left">{this.props.left}</div>
                <div className = "middle">{this.props.children}</div>
                <div className = "right">{this.props.right}</div>
            </HeaderContainer>
        );
    }
}

export default Header;