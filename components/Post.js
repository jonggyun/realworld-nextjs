import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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

const UserImage = styled.img`
  margin-right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
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

const Post = ({ title, author, image, createdAt, content, tags }) => (
  <React.Fragment>
    <TitleSection>
      <Title>{title}</Title>
      <Info>
        <UserImage src={image} alt="user_image" />
        <UserInfo>
          <Writer>{author}</Writer>
          <Date>{moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}</Date>
        </UserInfo>
      </Info>
    </TitleSection>
    <ContentSection>
      <Content>{content}</Content>
      <Tags>
        {tags.map(tag => (
          <Tag key={`tag_${tag}`}>{tag}</Tag>
        ))}
      </Tags>
      <HorizontalLine />
    </ContentSection>
  </React.Fragment>
);

export default Post;
