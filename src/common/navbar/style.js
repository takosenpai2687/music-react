import {
  buttonColor,
  fontFamily,
  boxShadow,
  bgColor,
  navIconColor
} from '../../statics/mixins';
import styled from 'styled-components';

const margin = 10;
const width = 80;
const midHeight = 360;

export const NavWrap = styled.div`
  width: ${width}px;
  height: 100%;
  background-color: ${bgColor};
  float: left;
  position: relative;
  left: 0;
  top: 0;
  box-shadow: ${boxShadow};
  z-index: 9999;
  user-select: none;
  overflow: hidden;
`;

export const NavTop = styled.div`
  width: 100%;
  height: 200px;
`;

export const Thumbnail = styled.div`
  width: ${width - 2 * margin}px;
  height: ${width - 2 * margin}px;
  margin: 0 auto;
  margin-top: ${margin}px;
  border-radius: 50%;
  box-shadow: 0 0 8px #333 inset;
  border: 3px solid #f0f0f0;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    box-shadow: ${boxShadow};
  }
`;

export const NavMid = styled.div`
  width: 100%;
  height: ${midHeight}px;
`;

export const NavItem = styled.div`
  width: ${width - 2 * margin}px;
  height: ${width - 2 * margin}px;
  text-align: center;
  padding: 0;
  color: ${navIconColor};
  margin: 0 auto;
  margin-bottom: ${margin * 2}px;
  cursor: pointer;
  transition: color 0.2s ease-out;
  &:hover,
  &.active {
    color: ${buttonColor};
    text-shadow: 0 0 1px ${buttonColor};
  }

  p {
    font-size: 15px;
    font-family: ${fontFamily};
  }
  .iconfont {
    font-size: 30px;
    margin-bottom: ${margin}px;
  }
`;

export const NavBot = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
