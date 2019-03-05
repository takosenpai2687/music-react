import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { actionCreators as commonActionCreators } from '../../../common/store';
import axios from 'axios';
import { HomeContentWrap, ContentHeader, MusicList } from '../style';

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.albumList.length) {
      this.setState(
        {
          dataList: nextProps.navItems
            .map(item => {
              return item.data;
            })
            .concat(
              nextProps.albumList.map(item => {
                return item.data;
              })
            )
        },
        () => {
          let nextIndex = nextProps.activeNavIndex;
          if (typeof this.state.dataList[nextIndex] === 'string') {
            axios
              .get(this.state.dataList[nextIndex])
              .then(res => {
                let data = res.data.musicList || res.data.playList;
                let dataList = JSON.parse(JSON.stringify(this.state.dataList));
                dataList[nextIndex] = data;
                this.setState({ dataList });
              })
              .catch(err => console.log(err));
          }
        }
      );
    } else {
      let nextIndex = nextProps.activeNavIndex;
      if (typeof this.state.dataList[nextIndex] === 'string') {
        axios
          .get(this.state.dataList[nextIndex])
          .then(res => {
            let data = res.data.musicList || res.data.playList;
            let dataList = JSON.parse(JSON.stringify(this.state.dataList));
            dataList[nextIndex] = data;
            this.setState({ dataList });
          })
          .catch(err => console.log(err));
      }
    }
  }

  // props: home/activeIndex, navItems, home/albumList, common/index
  render() {
    let navIndex = this.props.activeNavIndex;
    return (
      <HomeContentWrap style={{ position: 'relative' }}>
        <ContentHeader>
          <p>
            {navIndex < 3
              ? this.props.navItems[navIndex].name
              : this.props.albumList[navIndex - 3].name}
          </p>
        </ContentHeader>
        <MusicList>
          <ul ref="musicList">{this.renderMusicList()}</ul>
        </MusicList>
        <button onClick={this.test.bind(this)}>123</button>
      </HomeContentWrap>
    );
  }

  renderMusicList() {
    if (
      !this.state.dataList ||
      typeof this.state.dataList[this.props.activeNavIndex] === 'string'
    ) {
      return;
    }
    return this.state.dataList[this.props.activeNavIndex].map((el, index) => {
      return (
        <li key={index} onClick={this.handleClick.bind(this, el.name)}>
          <p>{el.name}</p>
          <p>
            <span>{el.artist}</span>
            <span>{el.album}</span>
          </p>
        </li>
      );
    });
  }

  handleClick(name, e) {
    let nextIndex = Array.indexOf(
      this.props.playList.map(el => {
        return el.name;
      }),
      name
    );
    if (nextIndex > -1) {
      // switch index
      this.props.changeIndex(nextIndex);
    }
  }

  test() {
    console.log({
      state: this.state,
      index: this.props.activeNavIndex,
      albumList: this.props.albumList,
      navItems: this.props.navItems
    });
  }
}
const mapState = state => ({
  albumList: state.home.albumList,
  activeNavIndex: state.home.activeIndex,
  playList: state.common.playList
});

const mapDispatch = dispatch => ({
  changeIndex(index) {
    dispatch(commonActionCreators.changeIndex(index));
  }
});

export default connect(
  mapState,
  mapDispatch
)(HomeContent);
