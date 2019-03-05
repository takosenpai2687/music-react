import { combineReducers } from 'redux';
import { reducer as commonReducer } from '../common/store';
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers({
  common: commonReducer,
  home: homeReducer
});

export default reducer;
