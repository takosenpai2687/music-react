import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Controller from '../../common/controller';
import Cover from '../../common/cover';
import Navbar from '../../common/navbar';
import axios from 'axios';
import {HomeWrap, ContentWrap } from './style';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeWrap>
        <Navbar />
        <ContentWrap>
          <Controller />
          <Cover />
        </ContentWrap>
      </HomeWrap>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Home);
