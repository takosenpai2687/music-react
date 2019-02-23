import React, { PureComponent } from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

import {
  ControlWrap,
  ControlLeft,
  ControlThumbnail,
  ControlMid,
  ControlRight,
  ControlInfo,
  ControlHeader,
  ControlIcons,
  ControlButtons,
  ControlAddons,
  ControlRange
} from '../style';

class Controller extends PureComponent {
  constructor(props) {
    super(props);
    this.headerText = React.createRef();
    this.headerContainer = React.createRef();
    this.player = React.createRef();
    this.progressBar = React.createRef();
    this.handlePlay = this.handlePlay.bind(this);
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.playHandler = null;
  }

  render() {
    return (
      <ControlWrap>
        <ControlRange
          min="0"
          max={this.props.duration || 0}
          value={this.props.currentTime}
          ref={this.progressBar}
          onChange={this.handleProgressChange}
        />
        <ControlLeft>
          <ControlThumbnail>
            <a>
              <img
                src={this.props.imgUrl}
                alt=""
                onClick={() => this.props.handleCover(true)}
              />
            </a>
          </ControlThumbnail>
          <ControlInfo>
            <ControlHeader ref={this.headerContainer}>
              <span ref={this.headerText}>{this.props.name}</span>
            </ControlHeader>
            <ControlIcons>
              <span className="iconfont">&#xe640;</span>
              <span className="iconfont">&#xe78e;</span>
              <span className="iconfont">&#xe603;</span>
            </ControlIcons>
          </ControlInfo>
        </ControlLeft>
        <ControlMid>
          <ControlButtons>
            <span className="iconfont">&#xe60a;</span>
            <button
              className="control-small iconfont"
              onClick={() => {
                this.props.changeIndex(this.props.index - 1);
              }}
            >
              &#xe74e;
            </button>

            {this.renderPlayButton()}

            <button
              className="control-small iconfont"
              onClick={() => {
                this.props.changeIndex(this.props.index + 1);
              }}
            >
              &#xe750;
            </button>
            <span className="iconfont">&#xe729;</span>
          </ControlButtons>
        </ControlMid>
        <ControlRight>
          <ControlAddons>
            <p className="control-time">
              {this.formatTime(this.props.currentTime)}/
              {this.formatTime(this.props.duration)}
            </p>
            <p>
              <span>词</span>
            </p>
            <p>
              <span className="iconfont">&#xe608;</span>
            </p>
          </ControlAddons>
        </ControlRight>
        <audio src={this.props.musicUrl} ref={this.player} />
      </ControlWrap>
    );
  }

  handlePlay() {
    let nextState = 1 - this.props.playState;
    this.props.changePlayState(nextState);
    if (nextState === 1) {
      this.player.current.play();
    } else {
      this.player.current.pause();
    }
  }

  handleProgressChange() {
    this.player.current.pause();
    this.player.current.currentTime = this.progressBar.current.value;
    this.player.current.play();
  }

  renderPlayButton() {
    if (this.props.playState === 0) {
      return (
        <button className="control-large iconfont" onClick={this.handlePlay}>
          &#xe653;
        </button>
      );
    } else {
      return (
        <button className="control-large iconfont" onClick={this.handlePlay}>
          &#xe76a;
        </button>
      );
    }
  }

  slide() {
    let containWidth = this.headerContainer.current.clientWidth;
    let textWidth = this.headerText.current.clientWidth;

    let diff = textWidth - containWidth;
    if (diff < 0) {
      return;
    }
    let speed = 15;
    let style = document.createElement('style');
    style.type = 'text/css';
    let animation = `
      @keyframes slide {
        0% {
          left: 0;
        }
        50% {
          left: -${diff}px;
        }
        100% {
          left: 0;
        }
      }
      .header-container span {
        animation: slide ${diff / speed}s linear infinite;
      }
    `;
    style.innerHTML = animation;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  componentDidMount() {
    this.slide();
    this.player.current.onplay = () => {
      this.playHandler = setInterval(() => {
        this.props.changeCurrentTime(this.player.current.currentTime);
      }, 1000);
    };
    this.player.current.onpause = () => {
      clearInterval(this.playHandler);
      this.playHandler = null;
    };
  }

  componentWillReceiveProps() {
    this.slide();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      (!this.props.duration || this.props.duration === 0) &&
      this.player.current.duration
    ) {
      this.props.changeDuration(this.player.current.duration);
    }
    // styling progress bar
    this.progressBar.current.style.backgroundSize = `${(this.props.currentTime /
      this.props.duration) *
      100}% 100%`;
  }

  formatTime(secs) {
    if (!secs) {
      secs = 0;
    }
    let hour = Math.floor(secs / 3600);
    let min = Math.floor((secs - hour * 3600) / 60);
    let sec = Math.floor(secs - 3600 * hour - 60 * min);
    return `${hour >= 10 ? hour : '0' + hour}:${min >= 10 ? min : '0' + min}:${
      sec >= 10 ? sec : '0' + sec
    }`;
  }
}

const mapState = state => ({
  playState: state.home.playState,
  musicUrl: state.home.musicList[state.home.index].musicUrl,
  imgUrl: state.home.musicList[state.home.index].imgUrl,
  artist: state.home.musicList[state.home.index].artist,
  currentTime: state.home.currentTime,
  name: state.home.musicList[state.home.index].name,
  duration: state.home.duration,
  index: state.home.index
});

const mapDispatch = dispatch => ({
  changePlayState(playState) {
    dispatch(actionCreators.changePlayState(playState));
  },
  changeCurrentTime(time) {
    dispatch(actionCreators.changeCurrentTime(time));
  },
  changeDuration(time) {
    dispatch(actionCreators.changeDuration(time));
  },
  changeIndex(index) {
    dispatch(actionCreators.changeIndex(index));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Controller);
