import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

import Layout from '../components/Layout';
import Header from '../components/Header';

import Posts from '../components/Posts';

const MainSection = styled.section`
  height: 10.625rem;
  background-color: ${colors.blue9};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const Title = styled.h1`
  color: ${colors.gray0};
  font-size: 1.875rem;
`;

const SubTitle = styled.h3`
  color: ${colors.gray0};
  font-size: 1rem;
`;

const Index = () => (
  <Layout>
    <Header />
    <MainSection>
      <Title>Welcome to RealWorld</Title>
      <SubTitle>Personal Project made by Next.js</SubTitle>
    </MainSection>
    <Posts />
  </Layout>
);

export default Index;
