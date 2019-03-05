import styled, { keyframes } from 'styled-components';

import {
  fontFamily,
  iconSize,
  margin,
  boxShadow,
  buttonColor
} from '../../statics/mixins';

const height = 100;

export const CoverWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: ${height}px;
  z-index: 9;
  width: 100%;
  transition: all 0.3s ease-out;
`;

export const CoverBackground = styled.div`
  background-size: 100% !important;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.3s ease;
`;

export const CoverDisplay = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`;

export const CoverHeader = styled.div`
  height: ${height}px;
  width: ${height}px;
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
  user-select: none;
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
  position: relative;
  left: 60px;
`;

export const CoverInfo = styled.div`
  height: ${height}px;
  width: 100%;
  font-family: ${fontFamily};
  color: #eeeeee;
  user-select: none;
  p,
  span {
    margin: ${margin}px;
    text-shadow: 0 0 1px #f0f0f0;
  }
  p {
    font-size: 26px;
  }
  span {
    font-size: 20px;
  }
`;

export const CoverLyrics = styled.div`
  margin: ${margin}px 0;
  font-size: 16px;
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
  list-style-type: none;
  top: 0;
  left: 10px;
  width: 300px;
  height: 55%;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow: auto;
  text-align: center;
  font-family: ${fontFamily};
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
