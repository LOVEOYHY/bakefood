import React, { Component } from 'react'
// antd-mobile 
import { TabBar } from 'antd-mobile'
// 随机id
import uuid from 'uuid'
// 样式组件
import * as MainStyled from './styledComponent'

// 路由
import { Router } from 'react-router-dom'

// 小图标
import {
  FindIcon,
  FindIconActive,
  CourseIcon,
  CourseIconActive,
  ToolIcon,
  ToolIconActive,
  MineIcon,
  MineIconActive
} from '@assets/images'

// 内容
import FindContainer from '@pages/find/FindContainer'
import CourseContainer from '@pages/course/CourseContainer'
import ToolContainer from '@pages/tool/ToolContainer'
import MineContainer from '@pages/mine/MineContainer'


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'find',
      tabs: [
          { id: uuid(), title: '发现', selected: 'find', component: <FindContainer />, icons: { default: FindIcon, active: FindIconActive } },
          { id: uuid(), title: '课程', selected: 'course', component: <CourseContainer />, icons: { default: CourseIcon, active: CourseIconActive } },
          { id: uuid(), title: '工具', selected: 'tool', component: <ToolContainer />, icons: { default: ToolIcon, active: ToolIconActive } },
          { id: uuid(), title: '我的', selected: 'mine', component: <MineContainer />, icons: { default: MineIcon, active: MineIconActive } },
      ]
    };
  }

  renderTabItems () {
      let { tabs } = this.state
      return tabs.map(tab => (
            <TabBar.Item
                title={tab.title} key={tab.id}
                icon={ <MainStyled.MainTabIcon url = {tab.icons.default} /> }
                selectedIcon={<MainStyled.MainTabIcon url = {tab.icons.active} />}
                selected={this.state.selectedTab === tab.selected}
                onPress={() => {
                    this.setState({ selectedTab: tab.selected });
                }}
            >
                { tab.component }
          </TabBar.Item>
      ))
  }

  render() {
    return (
      <MainStyled.MainWrapper>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="rgba(255,255,255,0.95)"
        >
          {this.renderTabItems()}
          
        </TabBar>
      </MainStyled.MainWrapper>
    );
  }
}

export default MainContainer