import React, { Component } from 'react';
import { Header, Picture, MoreBtn } from '@c/commons'

import {
    Search
  } from '@assets/images'



class CourseContainer extends Component {
    render() {
        // console.log(FindIcon)
        return (
            <div>
                <Header
                    left = { <Picture type= {Search} /> }
                    >课程</Header>
                CourseContainer
                <MoreBtn />
            </div>
        );
    }
}

export default CourseContainer;