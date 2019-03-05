import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import axios from 'axios';
import { HomeNavContentWrap, ContentHeader } from '../style';

class HomeNavContent extends Component {
  // props: home/activeIndex, home/itemList, common/musicList, common/index
  render() {
    return (
      <HomeNavContentWrap style={{ position: 'relative' }}>
        {/* <ContentHeader /> */}
        <p
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            userSelect: 'none'
          }}
        >
          Pending development
        </p>
      </HomeNavContentWrap>
    );
  }
}
const mapState = state => ({
  albumList: state.home.albumList,
  activeIndex: state.home.activeIndex
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(HomeNavContent);
