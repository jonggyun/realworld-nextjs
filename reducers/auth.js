import produce from 'immer';

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';

export const LOGOUT_REQUSET = 'auth/LOGOUT_REQUSET';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

export const loginRequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUSET,
});

export const signUpRequest = ({ username, email, password }) => ({
  type: SIGNUP_REQUEST,
  username,
  email,
  password,
});

const initialState = {
  // isLoggedIn: localStorage.getItem('jwt') === true,
  loading: true,
  email: '',
  error: null,
  me: null,
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true;
        break;
      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.me = action.me;
        break;
      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOGOUT_REQUSET:
      case LOGOUT_FAILURE:
        break;
      case LOGOUT_SUCCESS:
        draft.me = null;
        break;
      case SIGNUP_REQUEST:
        draft.loading = true;
        break;
      case SIGNUP_SUCCESS:
        draft.loading = false;
        draft.me = action.me;
        break;
      case SIGNUP_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default reducer;
