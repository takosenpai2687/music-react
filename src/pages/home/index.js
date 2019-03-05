import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import HomeNav from './components/HomeNav';
import HomeNavContent from './components/HomeNavContent';
// import {HomeWrap, ContentWrap } from './style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <HomeNav />
        <HomeNavContent />
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

const mapDispatch = dispatch => ({
  
});

export default connect(
  mapState,
  mapDispatch
)(Home);
