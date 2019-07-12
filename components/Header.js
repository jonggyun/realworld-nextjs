import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import colors from '../styles/colors';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  height: 3.4375rem;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${colors.blue7};
  :hover {
    cursor: pointer;
  }
`;

const Menulist = styled.ul`
  display: flex;
  list-style-type: none;
  color: ${colors.gray5};
  :hover {
    cursor: pointer;
  }
`;

const Menu = styled.li`
  margin-left: 1rem;
  :hover {
    cursor: pointer;
    color: ${colors.gray6};
  }
`;

const Header = () => (
  <Wrapper>
    <Link href="/">
      <Title>RealWorld</Title>
    </Link>
    <nav>
      <Menulist>
        <Link href="/">
          <Menu>Home</Menu>
        </Link>
        <Link href="/signin">
          <Menu>Sign in</Menu>
        </Link>
        <Link href="/signup">
          <Menu>Sign up</Menu>
        </Link>
      </Menulist>
    </nav>
  </Wrapper>
);

export default Header;
