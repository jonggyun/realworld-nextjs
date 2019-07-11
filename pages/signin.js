import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import colors from '../styles/colors';

import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import SignInForm from '../components/SignInForm';

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

const login = () => (
  <Layout title="Sign in">
    <Header />
    <Section>
      <Title>Sign In</Title>
      <Link href="/signup">
        <Account>Need an account?</Account>
      </Link>
      <SignInForm name="email" placeholder="Email" />
      <SignInForm name="password" placeholder="Password" />
    </Section>
  </Layout>
);

export default login;
