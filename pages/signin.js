import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import colors from '../styles/colors';

import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import SignInForm from '../components/SignInForm';
import ButtonForm from '../components/ButtonForm';

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

const login = () => (
  <Layout title="Sign in">
    <Header />
    <Section>
      <Title>Sign In</Title>
      <Link href="/signup">
        <Account>Need an account?</Account>
      </Link>
      <FormSection>
        <SignInForm name="email" placeholder="Email" />
        <SignInForm name="password" placeholder="Password" />
        <ButtonForm title="Sign In" />
      </FormSection>
    </Section>
  </Layout>
);

export default login;
