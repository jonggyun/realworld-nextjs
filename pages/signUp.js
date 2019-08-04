import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import colors from '../styles/colors';

import Layout from '../components/Layout';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
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

const signUp = () => {
  return (
    <Layout title="Sign Up">
      <Header />
      <Section>
        <Title>Sign Up</Title>
        <Link href="/signIn">
          <Account>Have an account?</Account>
        </Link>
        <FormSection>
          <InputForm name="username" placeholder="Username" />
          <InputForm name="email" placeholder="Email" />
          <InputForm name="password" placeholder="Password" />
          <ButtonForm title="Sign up" />
        </FormSection>
      </Section>
    </Layout>
  );
};

export default signUp;
