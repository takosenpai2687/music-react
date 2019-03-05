import React, { Component } from 'react';
import { HomeAlbumWrap } from '../style';

export default class HomeAlbum extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const album = this.props.album;
    return (
      <HomeAlbumWrap
        onClick={this.handleClick}
        className={this.props.className}
      >
        <div>
          <img src={album.imgUrl} alt="" />
        </div>
        <div>
          <span>{album.name}</span>
        </div>
        <div>
          <span className="iconfont">&#xe728;</span>
        </div>
      </HomeAlbumWrap>
    );
  }

  handleClick() {
    this.props.changeIndex(this.props.index);
  }
}
