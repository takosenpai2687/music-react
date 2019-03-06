import React, { PureComponent } from 'react';
import { HomeNavWrap, HomeNavHeader } from '../style';
import HomeNavItem from './HomeNavItem';
import HomeAlbum from './HomeAlbum';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import axios from 'axios';

const TYPES = {
  NAV_ITEM: 0,
  ALBUM: 1
};

class HomeNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HomeNavWrap>
        {this.props.navItems.map((el, index) => {
          return (
            <HomeNavItem
              item={el}
              key={index}
              index={index}
              changeIndex={this.props.changeIndex}
              className={
                index === this.props.activeIndex ? 'navitem active' : 'navitem'
              }
            />
          );
        })}
        <div style={{ height: '60px', textAlign: 'center' }}>
          <HomeNavHeader>我的歌单</HomeNavHeader>
        </div>
        {this.props.albumList.map((el, index) => {
          let id = index+3;
          return (
            <HomeAlbum
              key={index}
              album={el}
              index={id}
              changeIndex={this.props.changeIndex}
              className={
                id === this.props.activeIndex
                  ? 'navitem active'
                  : 'navitem'
              }
            />
          );
        })}
      </HomeNavWrap>
    );
  }

  componentDidMount() {
    axios
      .get('./api/albumList.json')
      .then(res => {
        let albumList = res.data.albumList;
        this.props.changeAlbumList(albumList);
      })
      .catch(err => console.log(err));
  }
}
const mapState = state => ({
  albumList: state.home.albumList,
  playList: state.common.playList,
  activeIndex: state.home.activeIndex
});

const mapDispatch = dispatch => ({
  changeAlbumList(albumList) {
    dispatch(actionCreators.changeAlbumList(albumList));
  },
  changeIndex(index) {
    dispatch(actionCreators.changeIndex(index));
  }
});

export default connect(
  mapState,
  mapDispatch
)(HomeNav);
