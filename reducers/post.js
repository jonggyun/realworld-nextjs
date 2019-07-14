// actions
export const GET_POSTS_REQUEST = 'post/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'post/GET_POSTS_FAILURE';

// action creators
export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostsSuccess = () => ({
  type: GET_POSTS_SUCCESS,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

// initalState
const initialState = {
  posts: [],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_FAILURE:
    default:
      return state;
  }
};

export default reducer;
