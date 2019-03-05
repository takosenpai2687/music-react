import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
} from './style';
import { actionCreators } from '../store';

class Cover extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMusic: null,
      heightList: [],
      lyrics: null,
      midStart: 3,
      midEnd: 3,
      currentLine: 0,
      height: 0
    };
    this.hideCover = this.hideCover.bind(this);
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
        <React.Fragment>
          <CoverBackground
            ref="background"
            style={{
              background: `url(${
                this.state.currentMusic.imgUrl
              }) no-repeat center`,
              zIndex: '997',
              overflow: 'hidden',
              top: '0',
              left: '0'
            }}
          >
            <CoverBackground
              ref="background"
              style={{
                background: `url(${
                  this.state.currentMusic.imgUrl
                }) no-repeat center`,
                filter: 'blur(12px)',
                zIndex: '998',
                width: '120%',
                height: '120%',
                top: '-10%',
                left: '-10%'
              }}
            />
          </CoverBackground>
        </React.Fragment>
      );
    }
  }

  renderLyrics() {
    return (
      <LyricsContainer ref="lyricsContainer" scrollTop={this.state.height}>
        <ul
          ref="lyricsList"
          style={{
            position: 'absolute',
            transform: `translateY(${-this.state.height}px)`,
            transition: 'all .3s ease-out'
          }}
        >
          {this.getLyrics()}
        </ul>
      </LyricsContainer>
    );
  }

  getHeight() {
    let height;
    if (this.state.heightList && this.state.currentLine > this.state.midStart) {
      height = this.state.heightList[
        this.state.currentLine - this.state.midStart
      ];
    }
    return height;
  }

  getLyrics() {
    if (!this.state.currentMusic || !this.state.currentMusic.lyrics) {
      return <li>正在加载歌词</li>;
    }
    if (!this.state.lyrics) {
      axios
        .get(this.state.currentMusic.lyrics)
        .then(res => {
          let lyrics = res.data;
          this.setState({ lyrics });
        })
        .catch(err => console.log(err));
    } else {
      return this.state.lyrics.map((el, index) => {
        if (index === this.state.currentLine) {
          return (
            <li
              key={index}
              id={'line-' + index}
              className="lyrics-line"
              style={{
                color: '#36c37d',
                fontSize: '21px',
                fontWeight: 'bold',
                textShadow: '0 0 1.5px #36c37d'
              }}
            >
              {el.content}
            </li>
          );
        }
        return (
          <li key={index} id={'line-' + index} className="lyrics-line">
            {el.content}
          </li>
        );
      });
    }
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
        <span>歌手：{this.state.currentMusic.artist}</span>&nbsp;&nbsp;
        <span>专辑：{this.state.currentMusic.album || '未知'}</span>
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
            <p className="iconfont" onClick={this.hideCover}>
              &#xeefb;
            </p>
          </CoverHeader>
          <CoverContentWrap>
            <CoverContent>
              <CoverImage>{this.renderImage()}</CoverImage>
              <CoverLyricsWrap>
                {this.renderCoverInfo()}
                <CoverLyrics>{this.renderLyrics()}</CoverLyrics>
              </CoverLyricsWrap>
            </CoverContent>
          </CoverContentWrap>
        </CoverDisplay>
      </CoverWrap>
    );
  }

  componentWillReceiveProps(nextProps) {
    // if first load or change song
    if (!this.props.playList.length || this.props.index !== nextProps.index) {
      this.setState({
        currentMusic: nextProps.playList[nextProps.index],
        lyrics: null,
        currentLine: 0,
        heightList: [],
        height: 0
      });
      this.getLyrics();
    }
    // calc height
    let height = this.getHeight();
    if (this.state.height !== height) {
      this.setState({ height });
    }
    this.initSlide();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  async initSlide() {
    // initialize lyrics slider, called when loaded, change song or resize
    if (this.state.heightList.length === 0 && this.props.covered) {
      // if covered but no heightlist, then initialize it
      try {
        let elements = Object.values(
          document.getElementsByClassName('lyrics-line')
        );
        let heightList = elements.map(el => {
          return (
            el.getBoundingClientRect().y - elements[0].getBoundingClientRect().y
          );
        });
        if (heightList.length > 0) {
          this.setState({ heightList });
        }
      } catch (err) {}
    } else if (this.state.heightList.length && this.props.covered) {
      // if heightlist exists, update currentLine according to currentTime
      let timeList = this.state.lyrics.map(el => {
        return el.time;
      });
      let currentTime = this.props.currentTime;
      let currentLine = timeList.indexOf(
        timeList.reduce((prev, curr) => {
          return Math.abs(curr - currentTime) < Math.abs(prev - currentTime)
            ? curr
            : prev;
        })
      );
      if (this.state.currentLine !== currentLine) {
        this.setState({ currentLine });
      }
      // set height and scroll
    }
  }

  hideCover() {
    this.props.changeCovered(false);
  }

  componentWillUnmount() {
    console.log('unmount');
  }
}

const mapState = state => ({
  covered: state.common.covered,
  playList: state.common.playList,
  index: state.common.index,
  currentTime: state.common.currentTime
});

const mapDispatch = dispatch => ({
  changeCovered(covered) {
    dispatch(actionCreators.changeCovered(covered));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Cover);
