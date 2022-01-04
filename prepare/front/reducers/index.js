import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from './user';
import post from './post';

// reducer 의미 (이전상태와, 액션가지고) => 다음상태 바꿔주는 함수
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE: 
                console.log('hydrate', HYDRATE);
                return { ...state, ...action.payload }
            default: 
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;