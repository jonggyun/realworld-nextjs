import produce from 'immer';

// actions
export const GET_POSTS_REQUEST = 'post/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'post/GET_POSTS_FAILURE';

export const GET_POST_REQUEST = 'post/GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

export const GET_POSTS_BY_AUTHOR_REQUEST = 'post/GET_POST_BY_AUTHOR_REQUEST';
export const GET_POSTS_BY_AUTHOR_SUCCESS = 'post/GET_POST_BY_AUTHOR_SUCCESS';
export const GET_POSTS_BY_AUTHOR_FAILURE = 'post/GET_POST_BY_AUTHOR_FAILURE';

// action creators
export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostRequest = ({ slug }) => ({
  type: GET_POST_REQUEST,
  slug,
});

export const getPostByAuthorRequest = ({ author }) => ({
  type: GET_POSTS_BY_AUTHOR_REQUEST,
  author,
});

// initialState
const initialState = {
  loading: true,
  articles: [],
  articlesCount: 0,
  article: {},
};

// reducer
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_REQUEST:
        draft.loading = true;
        break;
      case GET_POSTS_SUCCESS:
        draft.articles = action.data.articles;
        draft.loading = false;
        break;
      case GET_POSTS_FAILURE:
        draft.loading = true;
        break;
      case GET_POST_REQUEST:
        draft.loading = true;
        break;
      case GET_POST_SUCCESS:
        draft.article = action.data.article;
        draft.loading = false;
        break;
      case GET_POST_FAILURE:
        draft.loading = false;
        break;
      case GET_POSTS_BY_AUTHOR_REQUEST:
        draft.loading = true;
        break;
      case GET_POSTS_BY_AUTHOR_SUCCESS:
        draft.articles = action.data.articles;
        draft.articlesCount = action.data.articlesCount;
        draft.loading = false;
        break;
      case GET_POSTS_BY_AUTHOR_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
