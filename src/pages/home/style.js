import styled from 'styled-components';

const border = '1px solid #cccccc';
const height = 50;
const margin = 10;
const fontFamily = 'SimHei, STHeiti';
const hoverColor = '#36c37d';
export const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeNavWrap = styled.div`
  float: left;
  width: 300px;
  height: 100%;
  outline: ${border};
  overflow-x: hidden;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

export const HomeNavItemWrap = styled.div`
  width: 100%;
  height: ${height}px;
  outline: ${border};
  color: #666;
  font-family: ${fontFamily};
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover,
  &.active {
    background: ${hoverColor};
    color: #eeeeee;
  }
  span {
    line-height: ${height}px;
    text-align: center;
    display: block;
  }
  div:nth-child(1) {
    width: ${height - margin}px;
    height: ${height - margin}px;
    float: left;
    span {
      font-size: 20px;
    }
  }
  div:nth-child(2) {
    float: left;
    height: ${height}px;
    font-size: 20px;
  }
  div:nth-child(3) {
    float: right;
    height: 100%;
    width: 30px;
  }
`;

export const HomeNavHeader = styled.p`
  color: #666;
  font-size: 20px;
  line-height: 60px;
  font-family: SimHei, SCHeiti;
  user-select: none;
  outline: ${border};
  width: 100%;
`;

export const HomeAlbumWrap = styled.div`
  width: 100%;
  height: 100px;
  outline: ${border};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover,
  &.active {
    background: ${hoverColor};
    color: #eeeeee;
  }
  div:nth-child(1) {
    float: left;
    width: 80px;
    height: 80px;
    margin: 10px;
    img {
      width: 100%;
      height: 100%;
      outline: 1px solid #eeeeee;
      user-select: none;
    }
  }
  div:nth-child(2) {
    float: left;
    height: 100%;
    span {
      text-overflow: hidden;
      font-size: 18px;
      font-family: ${fontFamily};
      color: #666;
    }
  }
  div:nth-child(3) {
    float: right;
    height: 100%;
    width: 30px;
    span {
      font-size: 20px;
    }
  }

  span {
    text-overflow: hidden;
    line-height: 100px;
    user-select: none;
  }
`;

export const HomeContentWrap = styled.div`
  height: calc(100% - 100px);
  width: calc(100% - 300px);
  float: left;
  overflow: hidden;
`;

export const ContentHeader = styled.div`
  height: ${height}px;
  width: 100%;
  p {
    user-select: none;
    font-size: 16px;
    font-family: ${fontFamily};
    color: #333;
    line-height: ${height}px;
    height: ${height}px;
    margin: 0 auto;
    text-align: center;
    border-bottom: ${border};
  }
`;

export const MusicList = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: pointer;
  user-select: none;
  ul {
    list-style-type: none;
    font-family: ${fontFamily};
    li {
      color: #333;
      height: 100px;
      width: 100%;
      border-bottom: ${border};
      &:hover, &.active{
        background-color: ${hoverColor};
        color: #f0f0f0;
      }
      p {
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
      }
      p:nth-child(1) {
        font-size: 18px;
      }
      p:nth-child(2) {
        font-size: 14px;
      }
      span {
        margin-right: 10px;
      }
    }
  }

  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;
