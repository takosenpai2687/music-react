import React, { Component } from 'react';
import { HomeNavItemWrap } from '../style';

export default class HomeNavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const item = this.props.item;
    return (
      <HomeNavItemWrap
        className={this.props.className}
        onClick={this.handleClick.bind(this)}
      >
        <div>{item.icon}</div>
        <div>
          <span>{item.name}</span>
        </div>
        <div>
          <span className="iconfont">&#xe728;</span>
        </div>
      </HomeNavItemWrap>
    );
  }
  handleClick() {
    this.props.changeIndex(this.props.index);
  }
}
