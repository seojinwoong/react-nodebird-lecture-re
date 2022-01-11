import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'; 

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) // 배포용일때는 web에서 확인할수 있는 devtools를 연결하지 않는 코드
    : composeWithDevTools(applyMiddleware(...middlewares)) // 개발용일때는 web에서 확인할 수 있는 devtools를 연결하는 코드
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;