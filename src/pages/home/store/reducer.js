import * as constants from './constants';
import React from 'react';

const defaultState = {
  albumList: [],
  activeIndex: 0
};

const changeIndex = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.activeIndex = action.index;
  return newState;
};

const changeAlbumList = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.albumList = action.albumList;
  return newState;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.changeAlbumList:
      return changeAlbumList(state, action);
    case constants.changeIndex:
      return changeIndex(state, action);
    default:
      return state;
  }
};
