// import { combineReducers } from '../../node_modules/redux/index'; <- 아래와 같이 그냥 'redux'로 설정할 것
import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
