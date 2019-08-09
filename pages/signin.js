import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import colors from '../styles/colors';

import Layout from '../components/Layout';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ButtonForm from '../components/ButtonForm';
import Loading from '../components/common/Loading';

import { loginRequest } from '../reducers/auth';

const Section = styled.section`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
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

const signIn = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ auth }) => auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnClick = () => {
    dispatch(loginRequest({ email, password }));
  };

  const handleOnChange = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <Layout title="Sign in">
      <Header />
      <Section>
        {loading ? <Loading size={60} height={400} isAbsolute /> : null}
        <Title>Sign In</Title>
        <Link href="/signUp">
          <Account>Need an account?</Account>
        </Link>
        <FormSection>
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
          <ButtonForm title="Sign In" handleOnClick={handleOnClick} />
        </FormSection>
      </Section>
    </Layout>
  );
};

export default signIn;
