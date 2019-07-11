import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const Button = styled.button`
  width: 6.25rem;
  height: 2.8125rem;
  border-radius: 0.3125rem;
  background-color: ${colors.blue7};
  color: #fff;
  font-size: 1rem;

  :focus {
    outline: none;
  }
  :hover {
    background-color: ${colors.blue8};
    cursor: pointer;
  }
`;

const ButtonForm = ({ title, handleOnClick = () => true }) => (
  <Button type="button" onClick={handleOnClick}>
    {title}
  </Button>
);

export default ButtonForm;
