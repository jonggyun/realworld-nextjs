import { useReducer } from 'react';

const reducer = (state, action) => ({
  ...state,
  [action.name]: action.value,
});

const useInput = value => {
  const [state, dispatch] = useReducer(reducer, value);
  const handleOnChange = e => dispatch(e.target);

  return [state, handleOnChange];
};

export default useInput;
