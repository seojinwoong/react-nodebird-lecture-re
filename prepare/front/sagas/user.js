import { delay, put, all, takeLatest, fork } from "redux-saga/effects";
import axios from 'axios';
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from '../reducers/user';

function logInAPI (data) {
    return axios.post('/api/login', data)
}

function* logIn(action) {
    try {
        // const result =  yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data
        });
    }
}
function logOutAPI () {
    return axios.get('/api/logout')
}

function* logOut() {
    try {
        yield delay(1000);
        // const result =  yield call(logOutAPI)
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data
        });
    }
}

function signUpAPI () {
    return axios.get('/api/signup')
}

function* signUp() {
    try {
        yield delay(1000);
        // const result =  yield call(signUpAPI)
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn); 
    // takeLatest => 만약 더블클릭했을때는 마지막것만 알아서 실행해줌.
    // takeLeading =>  만약 더블클릭했을때는 첫번째것만 알아서 실행해줌.
}
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp)
    ])
}