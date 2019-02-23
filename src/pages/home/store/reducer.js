import * as constants from './constants';
import axios from 'axios';

const defaultState = {
  playState: 0,
  imgUrl: '',
  musicUrl: '',
  currentTime: 0,
  duration: 0,
  covered: false,
  musicList: [{}],
  index: [0]
};

const changePlayState = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.playState = action.playState;
  return newState;
};

const changeCurrentTime = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.currentTime = action.time;
  return newState;
};

const changeDuration = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.duration = action.time;
  return newState;
};

const changeCovered = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.covered = action.covered;
  return newState;
};

const changeMusicList = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.musicList = action.data;
  return newState;
};

const changeIndex = (state, action) => {
  let index = action.index;
  if (index === state.index) {
    return state;
  }
  if (index < 0) {
    index = state.musicList.length - 1;
  }
  if (index > state.musicList.length - 1) {
    index = 0;
  }
  const newState = JSON.parse(JSON.stringify(state));
  newState.index = index;
  return newState;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.changePlayState:
      return changePlayState(state, action);
    case constants.changeCurrentTime:
      return changeCurrentTime(state, action);
    case constants.changeDuration:
      return changeDuration(state, action);
    case constants.changeCovered:
      return changeCovered(state, action);
    case constants.changeMusicList:
      return changeMusicList(state, action);
    case constants.changeIndex:
      return changeIndex(state, action);
    default:
      return state;
  }
};
