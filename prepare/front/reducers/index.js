import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {}
    }, 
    post: {
        mainPosts: []
    }
};

export const loginAction = (data) => {
    return {
        type: "LOG_IN",
        data
    }
}

export const logoutAction = () => {
    return {
        type: "LOG_OUT"
    }
}

// reducer 의미 (이전상태와, 액션가지고) => 다음상태 바꿔주는 함수
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: 
            console.log('hydrate', HYDRATE);
            return { ...state, ...action.payload }
        case "LOG_IN": 
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                }
            }
        case "LOG_OUT": 
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null
                }
            }
        default: 
            return state;
    }
};

export default rootReducer;