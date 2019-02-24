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
    this.getData();
  }

  getData() {
    axios
      .get('/api/data.json')
      .then(res => this.props.getDataSucc(res))
      .catch(err => console.log(err));
  }
}

const mapState = state => ({
  covered: state.home.covered
});

const mapDispatch = dispatch => ({
  changeCovered(covered) {
    dispatch(actionCreators.changeCovered(covered));
  },

  getDataSucc(res) {
    let musicList = res.data.musicList;
    dispatch(actionCreators.changeMusicList(musicList));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
