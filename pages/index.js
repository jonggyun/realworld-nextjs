import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from '../styles/colors';

import Layout from '../components/Layout';
import Header from '../components/Header';

import { getPostsRequest } from '../reducers/post';

const MainSection = styled.section`
  height: 10.625rem;
  background-color: ${colors.blue9};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${colors.gray0};
  font-size: 1.875rem;
`;

const SubTitle = styled.h3`
  color: ${colors.gray0};
  font-size: 1rem;
`;

const Index = ({ getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <Header />
      <MainSection>
        <Title>Welcome to RealWorld</Title>
        <SubTitle>Personal Project made by Next.js</SubTitle>
      </MainSection>
    </Layout>
  );
};

Index.getInitialProps = async ({ store, isServer }) => {
  store.dispatch(getPostsRequest());
};

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsRequest()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Index);
