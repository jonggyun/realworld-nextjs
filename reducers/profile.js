import produce from 'immer';

export const GET_PROFILE_REQUEST = 'profile/GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'profile/GET_PROFILE_FAILURE';

export const getProfileRequest = ({ username }) => ({
  type: GET_PROFILE_REQUEST,
  username,
});

const initialState = {
  profile: {},
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PROFILE_REQUEST:
        break;
      case GET_PROFILE_SUCCESS:
        draft.profile = action.data.profile;
        break;
      case GET_PROFILE_FAILURE:
        break;
    }
  });

export default reducer;
