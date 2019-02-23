import styled, { keyframes } from 'styled-components';

const height = 100;
const fontBig = 20;
const fontFamily = 'SimHei, STHeiti';
const iconSize = 24;
const margin = 10;
const boxShadow = '0 0 10px #727272';
const buttonColor = '#36c37d';
const buttonHoverColor = '#20B76A';

export const ControlWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${height}px;
  background-color: #f0f0f0;
  box-shadow: ${boxShadow};
  z-index: 999;
`;

export const ControlLeft = styled.div`
  width: 33%;
  height: 100%;
  float: left;
  overflow: hidden;
`;

const flip = keyframes`
  0%{
    transform: rotateY(-45deg)
  }
  50%{
    transform: rotateY(45deg)
  }
  100%{
    transform: rotateY(0deg)
  }
`;

export const ControlThumbnail = styled.div`
  width: ${height}px;
  height: ${height}px;
  margin: 0;
  float: left;
  a {
    display: block;
    &:hover {
      animation: ${flip} 1s linear;
    }
  }
  img {
    cursor: pointer;
    user-select: none;
    margin: ${margin}px;
    width: ${height - 2 * margin}px;
    height: ${height - 2 * margin}px;
    display: block;
    border-radius: 2px;
    box-shadow: ${boxShadow};
    perspective: 800px;
    animation: ${flip} 1s linear;
  }
`;

export const ControlInfo = styled.div`
  width: calc(100% - ${height}px);
  height: 100%;
  margin: 0;
  float: left;
`;

export const ControlHeader = styled.p.attrs({ className: 'header-container' })`
  margin: ${margin}px 0 0 ${margin}px;
  width: 90%;
  height: ${0.4 * height}px;
  overflow: hidden;
  span {
    white-space: nowrap;
    color: #444444;
    font-size: ${fontBig}px;
    line-height: ${0.4 * height}px;
    font-family: ${fontFamily};
    display: inline-block;
    position: relative;
    user-select: none;
  }
`;

export const ControlIcons = styled.p`
  margin: 0 0 ${margin}px ${margin}px;
  width: 100%;
  height: ${0.6 * height}px;
  line-height: ${0.6 * height}px;
  position: relative;
  bottom: 10px;
  span {
    user-select: none;
    cursor: pointer;
    margin-right: ${margin}px;
    font-size: ${iconSize}px;
    color: #555555;
    &:hover {
      color: ${buttonColor};
    }
  }
`;

export const ControlMid = styled.div`
  width: 33%;
  height: 100%;
  float: left;
`;

export const ControlButtons = styled.div`
  width: 290px;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  padding-right: -5px;
  display: flex;
  align-items: center;
  button {
    cursor: pointer;
    outline: none;
    border: 2px solid ${buttonColor};
    border-radius: 50%;
    background-color: #f0f0f0;
    float: left;
    color: ${buttonColor};
    text-align: center;
    &.control-small {
      margin: 30px 5px;
      width: ${0.4 * height}px;
      height: ${0.4 * height}px;
      font-size: 16px;
    }
    &.control-large {
      width: ${0.6 * height}px;
      height: ${0.6 * height}px;
      margin: 20px 5px;
      font-size: 22px;
    }
    &:hover {
      border: 3px solid ${buttonHoverColor};
    }
  }
  span {
    cursor: pointer;
    user-select: none;
    float: left;
    width: ${0.6 * height}px;
    height: ${height}px;
    line-height: ${height}px;
    text-align: center;
    margin: 0;
    color: #333;
    font-family: ${fontFamily};
    font-size: 20px;
    vertical-align: middle;
    &:hover {
      color: ${buttonColor};
    }
  }
`;

export const ControlRight = styled.div`
  width: 33%;
  height: 100%;
  float: left;
`;

export const ControlAddons = styled.div`
  overflow: hidden;
  height: ${height}px;
  float: right;
  display: flex;
  font-family: ${fontFamily};
  p {
    user-select: none;
    height: ${0.8 * height}px;
    line-height: ${height}px;
    margin: ${0.1 * height}px 0;
    text-align: center;
    float: left;
    color: #333;
    font-size: ${fontBig}px;
  }
  p:nth-child(2),
  p:nth-child(3) {
    width: 60px;
    span {
      height: 100%;
      line-height: ${height}px;
      cursor: pointer;
      &:hover {
        color: ${buttonColor};
      }
    }
  }
  p:nth-child(2) {
    font-size: 24px;
  }
`;

export const ControlRange = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 3px;
  position: absolute;
  top: -3px;
  left: 0;
  z-index: 9999;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  background: -webkit-linear-gradient(#36cc7d, #ddd) no-repeat;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1.2px solid ${buttonColor};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f0f0f0;
    box-shadow: 0px 0px 1px #0d0d0d;
    z-index: 9999;
  }
`;

export const CoverWrap = styled.div`
  position: absolute;
  bottom: ${height}px;
  z-index: 9;
  width: 100%;
  height: calc(100% - ${height}px);
  transition: all 0.3s ease;
`;

export const CoverBackground = styled.div`
  background-size: cover;
  filter: blur(8px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
`;

export const CoverDisplay = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const CoverHeader = styled.div`
  height: ${height}px;
  width: 100%;
  line-height: ${height}px;
  p {
    font-size: ${iconSize}px;
    font-family: ${fontFamily};
    font-weight: bolder;
    margin-left: ${iconSize}px;
    color: #eeeeee;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: ${buttonColor};
    }
  }
`;

export const CoverContentWrap = styled.div`
  width: 100%;
  height: calc(100% - ${height}px);
`;

export const CoverContent = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

export const CoverImage = styled.div`
  width: 40%;
  height: 100%;
  float: left;
  border-radius: 5px;
  img {
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 300px;
    position: relative;
    top: 20%;
    box-shadow: ${boxShadow};
  }
`;

export const CoverLyricsWrap = styled.div`
  width: 60%;
  height: 100%;
  float: left;
  overflow: hidden;
`;

export const CoverInfo = styled.div`
  height: ${height}px;
  width: 100%;
  font-size: ${fontBig}px;
  font-family: ${fontFamily};
  color: #eeeeee;
  p,
  span {
    margin: ${margin}px;
  }
`;

export const CoverLyrics = styled.div`
  margin: ${margin}px 0;
  font-size: ${fontBig - 2}px;
  color: #dddddd;
  line-height: 2em;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

export const LyricsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  width: 300px;
  height: 55%;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  user-select: none;
`;
