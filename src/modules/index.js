// import { combineReducers } from '../../node_modules/redux/index'; <- 아래와 같이 그냥 'redux'로 설정할 것
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    auth,
    loading,
});

export function* rootSaga() {
    yield all([authSaga]);
}

export default rootReducer;
