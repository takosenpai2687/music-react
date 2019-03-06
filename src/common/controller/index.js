import React, { PureComponent } from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import axios from 'axios';

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
  ControlRange,
  VolumeControl
} from './style';

const MODES = {
  LIST_LOOP: 0,
  SINGLE_LOOP: 1,
  RANDOM: 2
};

class Controller extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMusic: null,
      volume: 60,
      muted: false,
      mode: MODES.LIST_LOOP,
      undoStack: [],
      redoStack: []
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.showCover = this.showCover.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.playHandler = null;
  }

  render() {
    return (
      <ControlWrap>
        {this.renderPlayer()}
        <ControlRange
          min="0"
          max={this.props.duration}
          value={this.props.currentTime}
          ref="progressBar"
          onChange={this.handleProgressChange}
        />
        <ControlLeft>
          <ControlThumbnail>{this.renderThumbnail()}</ControlThumbnail>
          <ControlInfo>
            <ControlHeader ref="headerContainer">
              {this.renderHeader()}
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
            {this.renderModes()}
            <button
              className="control-small iconfont"
              onClick={this.handlePrev}
            >
              &#xe74e;
            </button>

            {this.renderPlayButton()}

            <button
              className="control-small iconfont"
              onClick={this.handleNext}
            >
              &#xe750;
            </button>

            {this.state.muted ? (
              <span
                className="iconfont"
                id="btn-volume"
                onClick={this.handleMute}
              >
                &#xe692;
              </span>
            ) : (
              <span
                className="iconfont"
                id="btn-volume"
                onClick={this.handleMute}
              >
                &#xe729;
              </span>
            )}
            {this.renderVolume()}
          </ControlButtons>
        </ControlMid>
        <ControlRight>
          <ControlAddons>
            {this.renderTimeStamp()}
            <p>
              <span onClick={this.showCover}>词</span>
            </p>
            <p>
              <span className="iconfont">&#xe608;</span>
            </p>
          </ControlAddons>
        </ControlRight>
      </ControlWrap>
    );
  }

  componentDidMount() {
    this.slide();
    this.refs.player.onplay = () => {
      this.playHandler = setInterval(() => {
        this.props.changeCurrentTime(this.refs.player.currentTime);
      }, 500);
    };
    this.refs.player.onpause = () => {
      clearInterval(this.playHandler);
      this.playHandler = null;
    };
  }

  componentWillReceiveProps(nextProps) {
    // judge if playList / index is different
    if (
      this.props.playList !== nextProps.playList ||
      this.props.index !== nextProps.index
    ) {
      this.slide();
      this.setState({ currentMusic: nextProps.playList[nextProps.index] });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // props no duration, but player has duration
    if (
      (!this.props.duration || this.props.duration === 0) &&
      this.refs.player.duration
    ) {
      this.props.changeDuration(this.refs.player.duration);
    }
    // both have duration, but different
    if (
      this.refs.player.duration &&
      this.props.duration !== this.refs.player.duration
    ) {
      this.props.changeDuration(this.refs.player.duration);
    }
    // styling progress bar
    this.refs.progressBar.style.backgroundSize = `${(this.props.currentTime /
      this.props.duration) *
      100}% 100%`;
  }

  renderPlayer() {
    if (!this.state.currentMusic) {
      return <audio src={'/'} ref="player" />;
    }
    return (
      <audio
        src={this.state.currentMusic.musicUrl}
        ref="player"
        autoPlay
        volume={`${this.state.volume / 100}`}
        onEnded={this.handleComplete}
      />
    );
  }

  renderThumbnail() {
    if (!this.state.currentMusic) {
      return (
        <img
          src="img/loading.gif"
          alt=""
          onClick={this.showCover}
        />
      );
    } else {
      return (
        <img
          src={this.state.currentMusic.imgUrl}
          alt="img/loading.gif"
          onClick={this.showCover}
        />
      );
    }
  }

  renderHeader() {
    if (!this.state.currentMusic) {
      return <span ref="headerText">{'Loading Music Name'}</span>;
    } else {
      return <span ref="headerText">{this.state.currentMusic.name}</span>;
    }
  }

  renderModes() {
    switch (this.state.mode) {
      case MODES.RANDOM:
        return (
          <span className="iconfont" onClick={this.handleModeChange}>
            &#xe60a;
          </span>
        );
      case MODES.SINGLE_LOOP:
        return (
          <span className="iconfont" onClick={this.handleModeChange}>
            &#xe66d;
          </span>
        );
      case MODES.LIST_LOOP:
        return (
          <span className="iconfont" onClick={this.handleModeChange}>
            &#xe623;
          </span>
        );
      default:
        return null;
    }
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

  renderVolume() {
    return (
      <VolumeControl
        ref="volume"
        style={{ backgroundSize: `${this.state.volume}% 100%` }}
        onChange={this.handleVolumeChange}
        min="0"
        max="100"
        value={this.state.volume}
      />
    );
  }

  renderTimeStamp() {
    if (!this.state.currentMusic) {
      return (
        <p className="control-time">
          {this.formatTime(0)}/{this.formatTime(0)}
        </p>
      );
    }
    return (
      <p className="control-time">
        {this.formatTime(this.props.currentTime)}/
        {this.formatTime(this.props.duration)}
      </p>
    );
  }

  componentWillMount() {
    this.getData();
  }

  c;

  handleMute() {
    let nextMuted = !this.state.muted;
    this.refs.player.muted = nextMuted;
    this.setState({ muted: !this.state.muted });
  }

  handleVolumeChange() {
    this.setState({ volume: this.refs.volume.value });
    this.refs.player.volume = this.refs.volume.value / 100;
  }

  handleModeChange() {
    let currentMode = this.state.mode;
    if (!Object.values(MODES).includes(currentMode + 1)) {
      this.setState({ mode: 0 });
    } else {
      this.setState({ mode: this.state.mode + 1 });
    }
  }

  handlePrev() {
    this.state.redoStack.push(this.props.index);
    if (this.state.undoStack.length !== 0) {
      this.props.changeIndex(this.state.undoStack.pop());
    } else if (this.state.mode === MODES.RANDOM) {
      this.props.changeIndex(
        this.generateRandom(this.props.index, this.props.playList.length)
      );
    } else {
      this.props.changeIndex(this.props.index - 1);
    }
    this.props.changePlayState(1);
  }

  handleNext() {
    // onclick event for next button
    this.state.undoStack.push(this.props.index);
    if (this.state.redoStack.length !== 0) {
      this.props.changeIndex(this.state.redoStack.pop());
    } else if (this.state.mode === MODES.RANDOM) {
      this.props.changeIndex(
        this.generateRandom(this.props.index, this.props.playList.length)
      );
    } else {
      this.props.changeIndex(this.props.index + 1);
    }
    this.props.changePlayState(1);
  }

  handleComplete() {
    // event triggered when play complete
    switch (this.state.mode) {
      case MODES.RANDOM:
        this.state.undoStack.push(this.props.index);
        this.props.changeIndex(
          this.generateRandom(this.props.index, this.props.playList.length)
        );
        break;
      case MODES.SINGLE_LOOP:
        this.refs.player.currentTime = 0;
        this.refs.player.play();
        break;
      case MODES.LIST_LOOP:
        this.state.undoStack.push(this.props.index);
        this.props.changeIndex(this.props.index + 1);
        break;
      default:
        return;
    }
  }

  handlePlay() {
    // handle play button click
    let nextState = 1 - this.props.playState;
    this.props.changePlayState(nextState);
    if (nextState === 1) {
      this.refs.player.play();
    } else {
      this.refs.player.pause();
    }
  }

  handleProgressChange() {
    this.refs.player.pause();
    this.refs.player.currentTime = this.refs.progressBar.value;
    this.props.changeCurrentTime(this.refs.progressBar.value);
    this.refs.player.play();
  }

  showCover() {
    this.props.changeCovered(true);
  }

  getData() {
    axios
      .get('./api/data.json')
      .then(res => this.props.getDataSucc(res))
      .catch(err => console.log(err));
  }

  slide() {
    let containWidth = this.refs.headerContainer.clientWidth;
    let textWidth = this.refs.headerText.clientWidth;

    let diff = textWidth - containWidth;
    if (diff < 0) {
      return;
    }
    let speed = 8;
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

  generateRandom(prev, len) {
    let res = Math.floor(Math.random() * len);
    if (res === prev) {
      return this.generateRandom(prev, len);
    }
    return res;
  }
}

const mapState = state => {
  return {
    currentTime: state.common.currentTime,
    duration: state.common.duration,
    index: state.common.index,
    playList: state.common.playList,
    playState: state.common.playState
  };
};

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
  },
  changeCovered(covered) {
    dispatch(actionCreators.changeCovered(covered));
  },
  getDataSucc(res) {
    let playList = res.data.playList;
    dispatch(actionCreators.changePlayList(playList));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Controller);
