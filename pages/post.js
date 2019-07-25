import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';

import colors from '../styles/colors';

const TitleSection = styled.section`
  background-color: ${colors.gray8};
  color: #fff;
  padding: 1.875rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.8125rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.div`
  margin-right: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Writer = styled.span`
  font-size: 0.875rem;
  font-weight: 900;
`;

const Date = styled.span`
  font-size: 0.875rem;
`;

const ContentSection = styled.section`
  margin-top: 1.875rem;
`;

const Content = styled.span`
  font-size: 1.1875rem;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const Tag = styled.span`
  border: 1px solid ${colors.gray5};
  border-radius: 1.25rem;
  padding: 0.3125rem 0.75rem;
  margin-right: 0.375rem;
  margin-bottom: 1.25rem;
  font-size: 0.625rem;
  color: ${colors.gray5};
`;

const HorizontalLine = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid ${colors.gray5};
`;

const post = () => (
  <Layout title="Post">
    <Header />
    <TitleSection>
      <Title>Title</Title>
      <Info>
        <UserImage>이미지</UserImage>
        <UserInfo>
          <Writer>writer</Writer>
          <Date>2019.01.01</Date>
        </UserInfo>
      </Info>
    </TitleSection>
    <ContentSection>
      <Content>
        Blazor lets you build interactive web UIs using C# instead of
        JavaScript. Blazor apps are composed of reusable web UI components
        implemented using C#, HTML, and CSS. Both client and server code is
        written in C#, allowing you to share code and libraries. Blazor is a
        feature of ASP.NET, the popular web development framework that extends
        the .NET developer platform with tools and libraries for building web
        apps
      </Content>
      <Tags>
        <Tag>tag1</Tag>
        <Tag>tag2</Tag>
        <Tag>tag3</Tag>
      </Tags>
      <HorizontalLine />
    </ContentSection>
  </Layout>
);

export default post;
