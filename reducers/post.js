import produce from 'immer';

// actions
export const GET_POSTS_REQUEST = 'post/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'post/GET_POSTS_FAILURE';

export const GET_POST_REQUEST = 'post/GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

// action creators
export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostRequest = ({ slug }) => ({
  type: GET_POST_REQUEST,
  slug,
});

// initialState
const initialState = {
  articles: [],
  article: {},
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
      case GET_POST_REQUEST:
        break;
      case GET_POST_SUCCESS:
        draft.article = action.data.article;
        break;
      case GET_POST_FAILURE:
        break;
    }
  });

export default reducer;
