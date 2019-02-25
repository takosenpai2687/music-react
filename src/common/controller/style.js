import styled, { keyframes } from 'styled-components';
import {
  fontBig,
  fontFamily,
  iconSize,
  margin,
  boxShadow,
  buttonColor,
  buttonHoverColor
} from '../../statics/mixins';

const height = 100;

export const ControlWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
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
    transform: rotateY(-30deg)
  }
  50%{
    transform: rotateY(30deg)
  }
  100%{
    transform: rotateY(-30deg)
  }
`;

export const ControlThumbnail = styled.div`
  width: ${height}px;
  height: ${height}px;
  margin: 0;
  float: left;
  &:hover {
    animation: ${flip} 1s infinite;
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
    perspective: 400px;
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
  width: 400px;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  padding-right: -5px;
  display: flex;
  align-items: center;
  user-select: none;
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

export const VolumeControl = styled.input.attrs({ type: 'range' })`
  width: 100px;
  line-height: ${height};
  height: 10px;
  appearance: none;
  border: 1.2px solid ${buttonColor};
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background: -webkit-linear-gradient(#36c37d, #36c37d) no-repeat;
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
  height: 4px;
  position: absolute;
  top: -4px;
  left: 0;
  z-index: 9999;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  background: -webkit-linear-gradient(#36c37d, #36c37d) no-repeat;
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
