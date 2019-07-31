import produce from 'immer';

export const GET_PROFILE_REQUEST = 'profile/GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'profile/GET_PROFILE_FAILURE';

export const getProfileRequest = ({ author }) => ({
  type: GET_PROFILE_REQUEST,
  author,
});

const initialState = {
  loading: true,
  profile: {},
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PROFILE_REQUEST:
        draft.loading = true;
        break;
      case GET_PROFILE_SUCCESS:
        draft.profile = action.data.profile;
        draft.loading = false;
        break;
      case GET_PROFILE_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default reducer;
