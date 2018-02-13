import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import FeedsReducer from './reducer_feeds';
import ActiveUserReducer from './reducer_users';
import TestFeedReducer from './test_reducer_feeds';

const rootReducer = combineReducers({ feeds: TestFeedReducer, activeUser: ActiveUserReducer, form: formReducer });

export default rootReducer;
