import * as constants from './constants';

export const changeAlbumList = albumList => ({
  type: constants.changeAlbumList,
  albumList
});

export const changeIndex = index => ({ type: constants.changeIndex, index });
