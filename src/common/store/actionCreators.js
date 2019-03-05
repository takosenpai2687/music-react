import * as constants from './constants';

export const changePlayState = playState => ({
  type: constants.changePlayState,
  playState
});

export const changeCurrentTime = time => ({
  type: constants.changeCurrentTime,
  time
});

export const changeDuration = time => ({
  type: constants.changeDuration,
  time
});

export const changeCovered = covered => ({
  type: constants.changeCovered,
  covered
});

export const changePlayList = playList => {
  return {
    type: constants.changePlayList,
    playList
  };
};

export const changeIndex = index => ({
  type: constants.changeIndex,
  index
});
