import produce from 'immer';

// actions
export const GET_POSTS_REQUEST = 'post/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'post/GET_POSTS_FAILURE';

// action creators
export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

// initalState
const initialState = {
  articles: [],
};

// reducer
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_REQUEST:
        break;
      case GET_POSTS_SUCCESS:
        draft.articles = action.data.articles;
        break;
      case GET_POSTS_FAILURE:
        break;
      default:
        break;
    }
  });

export default reducer;
