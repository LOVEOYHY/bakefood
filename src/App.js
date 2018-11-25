import React, { Component } from 'react';

import MainContainer from '@pages/main/MainContainer'




// import uuid from 'uuid'


// import {
//     FindIcon,
//     FindIconActive,
//     CourseIcon,
//     CourseIconActive,
//     ToolIcon,
//     ToolIconActive,
//     MineIcon,
//     MineIconActive
//   } from '@assets/images'






class App extends Component {

  // state = {
  //     tabs: [
  //         { id: uuid(), title: '发现', selected: 'find', component: <FindContainer />, icons: { default: FindIcon, active: FindIconActive } },
  //         { id: uuid(), title: '课程', selected: 'course', component: <CourseContainer />, icons: { default: CourseIcon, active: CourseIconActive } },
  //         { id: uuid(), title: '工具', selected: 'tool', component: <ToolContainer />, icons: { default: ToolIcon, active: ToolIconActive } },
  //         { id: uuid(), title: '我的', selected: 'mine', component: <MineContainer />, icons: { default: MineIcon, active: MineIconActive } },
  //     ]
  // }

  render() {
    return (
      <div className="App">
        <MainContainer></MainContainer>
      </div>
    );
  }
}

export default App;
