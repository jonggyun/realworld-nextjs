import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import colors from '../styles/colors';

import Layout from '../components/Layout';
import Header from '../components/Header';
import SignInForm from '../components/SignInForm';
import ButtonForm from '../components/ButtonForm';

import { loginRequest } from '../reducers/auth';

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

const signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnClick = () => {
    dispatch(loginRequest({ email, password }));
  };
  return (
    <Layout title="Sign in">
      <Header />
      <Section>
        <Title>Sign In</Title>
        <Link href="/signup">
          <Account>Need an account?</Account>
        </Link>
        <FormSection>
          <SignInForm
            name="email"
            placeholder="Email"
            value={email}
            handleOnChange={e => setEmail(e.target.value)}
          />
          <SignInForm
            name="password"
            placeholder="Password"
            value={password}
            handleOnChange={e => setPassword(e.target.value)}
          />
          <ButtonForm title="Sign In" handleOnClick={handleOnClick} />
        </FormSection>
      </Section>
    </Layout>
  );
};

export default signin;
