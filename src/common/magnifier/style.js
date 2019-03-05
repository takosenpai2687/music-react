import styled from 'styled-components';

const size = 200;

export const Wrapper = styled.div`
  position: fixed;
  width: ${size}px;
  height: ${size}px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 3px solid #f0f0f0;
  outline: none;
  background: red;
  z-index: 999999;
  box-shadow: 0 0 12px #333 inset, 0 0 12px #333;
  transition: width 0.25s ease-out, height 0.25s ease-out;
`;
