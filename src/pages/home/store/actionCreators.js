import * as constants from './constants';
import axios from 'axios';

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

const changeMusicList = data => {
  return {
    type: constants.changeMusicList,
    data: data.musicList
  };
};

export const getMusicList = () => {
  return dispatch => {
    axios
      .get('/api/data.json')
      .then(res => {
        let data = res.data;
        dispatch(changeMusicList(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const changeIndex = index => ({
  type: constants.changeIndex,
  index
});