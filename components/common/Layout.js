import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 62.5rem;
  margin-left: auto;
  margin-right: auto;

  font-family: Roboto;
`;

const Container = styled.section``;

const Layout = ({ children, title }) => (
  <Wrapper>
    <Head>
      <title>{title ? `${title}` : 'Realworld'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
