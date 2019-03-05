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
    this.state = {
      navItems: [
        {
          index: 0,
          name: '我喜欢',
          icon: <span className="iconfont">&#xe640;</span>,
          data: 'api/favorites.json'
        },
        {
          index: 1,
          name: '本地音乐',
          icon: <span className="iconfont">&#xe638;</span>,
          data: 'api/localMusics.json'
        },
        {
          index: 2,
          name: '播放历史',
          icon: <span className="iconfont">&#xe878;</span>,
          data: []
        },
        {
          index: 3,
          name: '播放列表',
          icon: <span className="iconfont">&#xe608;</span>,
          data: this.props.playList
        }
      ]
    };
  }

  render() {
    return (
      <HomeNavWrap>
        {this.state.navItems.map((el, index) => {
          return (
            <HomeNavItem
              item={el}
              key={index}
              index={index}
              changeIndex={this.changeIndex}
            />
          );
        })}
        <div style={{ height: '60px', textAlign: 'center' }}>
          <HomeNavHeader>我的歌单</HomeNavHeader>
          {this.props.albumList.map((el, index) => {
            return (
              <HomeAlbum
                key={index}
                album={el}
                index={index}
                changeIndex={this.changeIndex}
              />
            );
          })}
        </div>
      </HomeNavWrap>
    );
  }

  changeIndex(index) {
    this.props.changeIndex(index);
  }

  componentDidMount() {
    axios
      .get('api/albumList.json')
      .then(res => {
        let albumList = res.data.albumList;
        this.props.changeAlbumList(albumList);
      })
      .catch(err => console.log(err));
  }
}
const mapState = state => ({
  albumList: state.home.albumList,
  playList: state.common.playList
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
