import shortId from 'shortid';
import produce from 'immer';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초'
        },
        content: '첫번째 게시글 #해시태그 #익스프레스',
        Images: [{
            id: shortId.generate(),
            src: 'https://picsum.photos/200/300'
        }, {
            id: shortId.generate(),
            src: 'https://picsum.photos/id/237/200/300'
        }, {
            id: shortId.generate(),
            src: 'https://picsum.photos/seed/picsum/200/300'
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'nero'
            },
            content: '우와 개정판이 나왔군요!'
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'hero'
            },
            content: '얼른 사고싶어요~'
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data
});

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: '제로초'
    },
    Images: [],
    Comments: []
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '제로초'
    },
})

// 복습 ! 리듀서란, 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성은 지키면서)
const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.mainPosts.unshift(dummyPost(action.data));
                draft.addPostLoading = false;
                draft.addPostDone = true;
                break;
            case ADD_POST_FAILURE: 
                draft.addPostLoading = false;
                draft.removePostError = action.error;
                break;

            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                draft.removePostLoading = false;
                draft.removePostDone = true;
                break;
            case REMOVE_POST_FAILURE: 
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;

            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
                
            case ADD_COMMENT_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;

                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId); 
                // const post = { ...state.mainPosts[postIndex] };
                // post.Comments = [ dummyComment(action.data.content), ...post.Comments ];
                // const mainPosts = [ ...state.mainPosts ];
                // mainPosts[postIndex] = post;
                // return {
                //     ...state,
                //     mainPosts,
                //     addCommentLoading: false,
                //     addCommentDone: true
                // }; => immer를 안쓰고 불변성 유지하기, 너무 복잡하다!
            }
            case ADD_COMMENT_FAILURE: 
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
            default:
                break;
        }
    });
};

export default reducer;