import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavWrap, NavTop, NavMid, NavBot, Thumbnail, NavItem } from './style';

class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <NavTop>
          <Thumbnail>
            <img src="img/thumbnail.png" alt=""/>
          </Thumbnail>
        </NavTop>
        <NavMid>
          <NavItem className="active">
            <p className="iconfont">&#xe600;</p>
            <p>我的音乐</p>
          </NavItem>
          <NavItem>
            <p className="iconfont">&#xe609;</p>
            <p>音乐馆</p>
          </NavItem>
          <NavItem>
            <p className="iconfont">&#xe656;</p>
            <p>MV</p>
          </NavItem>
          <NavItem>
            <p className="iconfont">&#xe619;</p>
            <p>搜索</p>
          </NavItem>
        </NavMid>
        <NavBot>
          <NavItem>
            <p
              className="iconfont"
              style={{
                marginBottom: '0',
                bottom: '30px',
                left: '50%',
                marginLeft: '-15px',
                position: 'absolute'
              }}
            >
              &#xe602;
            </p>
          </NavItem>
        </NavBot>
      </NavWrap>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Navbar);
