import { combineReducers } from 'redux';
import { reducer as commonReducer } from '../common/store';

const reducer = combineReducers({
  common: commonReducer
});

export default reducer;
