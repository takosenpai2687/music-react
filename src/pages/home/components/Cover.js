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
    this.background = React.createRef();
  }

  render() {
    return (
      <CoverWrap
        style={{ height: this.props.covered ? 'calc(100% - 100px)' : '0' }}
      >
        <CoverBackground ref={this.background} />
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
              <CoverImage>
                <img src={this.props.imgUrl} alt="" />
              </CoverImage>
              <CoverLyricsWrap>
                <CoverInfo>
                  <p>{this.props.name}</p>
                  <br />
                  <span>{this.props.artist}</span>&nbsp;&nbsp;
                  <span>专辑：123123</span>
                </CoverInfo>
                <CoverLyrics>
                  <LyricsContainer>
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
                  </LyricsContainer>
                </CoverLyrics>
              </CoverLyricsWrap>
            </CoverContent>
          </CoverContentWrap>
        </CoverDisplay>
      </CoverWrap>
    );
  }

  componentDidUpdate() {
    if (!this.props.imgUrl || this.props.imgUrl === '') {
      return;
    }
    console.log(this.props.imgUrl);
    const style = `background: url(${this.props.imgUrl}) no-repeat; background-size: cover;`;
    this.background.current.style = style;
  }
}

const mapState = state => ({
  imgUrl: state.home.musicList[state.home.index].imgUrl,
  covered: state.home.covered,
  name: state.home.musicList[state.home.index].name,
  artist: state.home.musicList[state.home.index].artist
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Cover);
