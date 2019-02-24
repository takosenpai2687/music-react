import React, { PureComponent } from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

import {
  CoverWrap,
  CoverHeader,
  CoverBackground,
  CoverDisplay,
  CoverContentWrap,
  CoverContent,
  CoverImage,
  CoverLyricsWrap,
  CoverInfo,
  CoverLyrics,
  LyricsContainer
} from '../style';

class Cover extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMusic: null
    };
  }

  renderImage() {
    if (!this.state.currentMusic) {
      return <img src={'img/loading.gif'} alt="" />;
    } else {
      return <img src={this.state.currentMusic.imgUrl} alt="" />;
    }
  }

  renderBackground() {
    if (!this.state.currentMusic) {
      return (
        <CoverBackground
          ref="background"
          style={{
            background: `#262626 no-repeat center`
          }}
        />
      );
    } else {
      return (
        <CoverBackground
          ref="background"
          style={{
            background: `url(${
              this.state.currentMusic.imgUrl
            }) no-repeat center`
          }}
        />
      );
    }
  }

  renderLyrics() {
    return (
      <p>
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
        12312312321
        <br />
      </p>
    );
  }

  renderCoverInfo() {
    if (!this.state.currentMusic) {
      return (
        <CoverInfo>
          <p>正在加载歌曲名称</p>
          <br />
          <span>正在加载歌手信息</span>&nbsp;&nbsp;
          <span>专辑：</span>
        </CoverInfo>
      );
    }
    return (
      <CoverInfo>
        <p>{this.state.currentMusic.name}</p>
        <br />
        <span>{this.state.currentMusic.artist}</span>&nbsp;&nbsp;
        <span>专辑：123123</span>
      </CoverInfo>
    );
  }

  render() {
    return (
      <CoverWrap
        style={{ height: this.props.covered ? 'calc(100% - 100px)' : '0' }}
      >
        {this.renderBackground()}
        <CoverDisplay>
          <CoverHeader>
            <p
              className="iconfont"
              onClick={() => {
                this.props.handleCover(false);
              }}
            >
              &#xeefb;
            </p>
          </CoverHeader>
          <CoverContentWrap>
            <CoverContent>
              <CoverImage>{this.renderImage()}</CoverImage>
              <CoverLyricsWrap>
                {this.renderCoverInfo()}
                <CoverLyrics>
                  <LyricsContainer>{this.renderLyrics()}</LyricsContainer>
                </CoverLyrics>
              </CoverLyricsWrap>
            </CoverContent>
          </CoverContentWrap>
        </CoverDisplay>
      </CoverWrap>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.musicList !== nextProps.musicList ||
      this.props.index !== nextProps.index
    ) {
      this.setState({ currentMusic: nextProps.musicList[nextProps.index] });
    }
  }
}

const mapState = state => ({
  covered: state.home.covered,
  musicList: state.home.musicList,
  index: state.home.index
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Cover);
