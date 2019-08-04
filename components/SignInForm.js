import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const Input = styled.input`
  width: 33.75rem;
  height: 1.5625rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: 1px solid ${colors.gray3};
  margin: 0.625rem 0;

  ::placeholder {
    color: ${colors.gray5};
  }
`;

const SignInForm = ({
  placeholder = 'placeholder',
  name = 'name',
  value = '',
  handleOnChange,
}) => (
  <Input
    type={name === 'password' ? 'password' : 'text'}
    name={name}
    value={value}
    onChange={handleOnChange}
    placeholder={placeholder}
    autoComplete="off"
  />
);

export default SignInForm;
