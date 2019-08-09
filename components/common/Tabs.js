import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const tabWidth = '10rem';
const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ length }) => `calc(${tabWidth} * ${length})`};
  border-bottom: 1px solid ${colors.gray3};
  font-size: 0.875rem;
  font-weight: 900;

  :hover {
    cursor: pointer;
  }
`;

const Tab = styled.li`
  padding: 0.625rem 0;
  width: ${tabWidth};
  text-align: center;
`;

const TabBorder = styled.div`
  border: 2px solid ${colors.blue9};
  width: ${tabWidth};
  box-sizing: border-box;
  transition: 0.3s;
  transform: ${({ tabIndex }) =>
    `translateX(${100 * parseInt(tabIndex, 10)}%)`};
`;

const Tabs = ({ tabs, tabIndex, handleOnClick }) => {
  return (
    <React.Fragment>
      <Wrapper length={tabs.length}>
        {tabs.map((tab, index) => (
          <Tab key={tab.name} onClick={() => handleOnClick(index)}>
            {tab.name}
          </Tab>
        ))}
      </Wrapper>
      <TabBorder tabIndex={tabIndex} length={tabs.length} />
    </React.Fragment>
  );
};

Tabs.defaultProps = {
  tabs: [{ name: 'left Tab' }, { name: 'right Tab' }, { name: '3rd tab' }],
  tabIndex: 0,
};

export default Tabs;
