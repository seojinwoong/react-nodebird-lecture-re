import { delay, put, all, takeLatest, fork } from "redux-saga/effects";
import shortId from 'shortid';
import axios from 'axios';
import { 
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function addPostAPI (data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        yield delay(1000);
        // const result =  yield call(addPostAPI, action.data);
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data
            }
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data
        });
    }
}

function removePostAPI (data) {
    return axios.delete('/api/post', data);
}

function* removePost(action) {
    try {
        yield delay(1000);
        // const result =  yield call(removePostAPI, action.data);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data
        });
    }
}

function addCommentAPI (data) {
    return axios.post(`/api/post/${id}/comment`, data);
}

function* addComment(action) {
    try {
        yield delay(1000);
        // const result =  yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data
        });
    }
}


function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
    // yield throttle("ADD_POST_REQUEST", addPost, 2000); => 2초동안에는 ADD_POST_REQUEST 액션을 한번만 감지한다
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
    ])
}