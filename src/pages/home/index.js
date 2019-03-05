import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import HomeNav from './components/HomeNav';
import HomeContent from './components/HomeContent';
// import {HomeWrap, ContentWrap } from './style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          index: 0,
          name: '本地音乐',
          icon: <span className="iconfont">&#xe638;</span>,
          data: 'api/localMusics.json'
        },
        {
          index: 1,
          name: '播放历史',
          icon: <span className="iconfont">&#xe878;</span>,
          data: []
        },
        {
          index: 2,
          name: '播放列表',
          icon: <span className="iconfont">&#xe608;</span>,
          data: this.props.playList
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <HomeNav navItems={this.state.navItems} />
        <HomeContent navItems={this.state.navItems} />
      </React.Fragment>
    );
  }
}

const mapState = state => ({
  albumList: state.home.albumList,
  activeIndex: state.home.activeIndex,
  navItems: state.home.navItems,
  playList: state.common.playList
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Home);
