import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './style';

class Magnifier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: '',
      show: false,
      x: 0,
      y: 0
    };
    this.offsetX = 100;
    this.offsetY = 100;
    this.handleShow = this.handleShow.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleUnshow = this.handleUnshow.bind(this);
  }

  render() {
    if (!window.innerWidth || !window.innerHeight) {
      return null;
    }
    if (!this.state.show) {
      return (
        <Wrapper
          style={{
            background: '#c0c0c0',
            backgroundPosition: `${-this.state.x}px ${-this.state.y}px`,
            left: this.state.x,
            top: this.state.y,
            cursor: 'none',
            width: '0',
            height: '0',
            border: 'none'
          }}
          ref="magnifier"
        />
      );
    }
    return (
      <Wrapper
        style={{
          background: `url(${this.state.imgUrl}) no-repeat` || '#333333',
          backgroundPosition: `${-this.state.x}px ${-this.state.y}px`,
          backgroundSize: `${window.innerWidth +
            this.offsetX}px ${window.innerHeight + this.offsetY}px`,
          left: this.state.x,
          top: this.state.y,
          cursor: 'none'
        }}
        ref="magnifier"
      />
    );
  }

  componentWillMount() {
    window.addEventListener('contextmenu', this.handleShow);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.playList.length &&
      nextProps.playList[nextProps.index].imgUrl !== this.state.imgUrl
    ) {
      this.setState({ imgUrl: nextProps.playList[nextProps.index].imgUrl });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.show;
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ show: true });
    this.setState({ x: e.clientX, y: e.clientY });
    window.removeEventListener('contextmenu', this.handleShow);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('contextmenu', this.handleUnshow);
  }

  handleMouseMove(e) {
    this.setState({ x: e.clientX, y: e.clientY });
  }

  handleUnshow(e) {
    e.preventDefault();
    this.setState({ show: false });
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('contextmenu', this.handleUnshow);
    window.addEventListener('contextmenu', this.handleShow);
  }
}

const mapState = state => ({
  playList: state.common.playList,
  index: state.common.index
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Magnifier);
