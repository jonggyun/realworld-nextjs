import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import colors from '../styles/colors';

import Layout from '../components/Layout';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ButtonForm from '../components/ButtonForm';

import { signUpRequest } from '../reducers/auth';

const Section = styled.section`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Account = styled.span`
  font-size: 1rem;
  color: ${colors.blue4};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const signUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnClick = () => {
    dispatch(signUpRequest({ username, email, password }));
  };

  const handleOnChange = e => {
    const { name, value } = e.target;

    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <Layout title="Sign Up">
      <Header />
      <Section>
        <Title>Sign Up</Title>
        <Link href="/signIn">
          <Account>Have an account?</Account>
        </Link>
        <FormSection>
          <InputForm
            name="username"
            placeholder="Username"
            value={username}
            handleOnChange={handleOnChange}
          />
          <InputForm
            name="email"
            placeholder="Email"
            value={email}
            handleOnChange={handleOnChange}
          />
          <InputForm
            name="password"
            placeholder="Password"
            value={password}
            handleOnChange={handleOnChange}
          />
          <ButtonForm title="Sign up" handleOnClick={handleOnClick} />
        </FormSection>
      </Section>
    </Layout>
  );
};

export default signUp;
