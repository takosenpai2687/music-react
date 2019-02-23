import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Controller from './components/Controller';
import Cover from './components/Cover';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleCover = this.handleCover.bind(this);
  }

  render() {
    return (
      <div>
        <Controller handleCover={this.handleCover} />
        <Cover handleCover={this.handleCover} />
      </div>
    );
  }

  handleCover(covered) {
    this.props.changeCovered(covered);
  }

  componentWillMount() {
    this.props.getMusicList();
  }
}

const mapState = state => ({
  covered: state.home.covered
});

const mapDispatch = dispatch => ({
  changeCovered(covered) {
    dispatch(actionCreators.changeCovered(covered));
  },
  getMusicList() {
    dispatch(actionCreators.getMusicList());
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
