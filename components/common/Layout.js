import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 62.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.section``;

const Layout = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
