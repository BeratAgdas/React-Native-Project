import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  page: pageReducer,
  search: searchReducer,
});

export default rootReducer;
