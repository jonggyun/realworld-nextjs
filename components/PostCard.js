import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

const Wrapper = styled.article`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.gray4};
`;

const WriteSection = styled.section`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const UserImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.25rem;
`;

const Info = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 0.3125rem;
`;

const UserName = styled.span`
  font-size: 1rem;
  color: ${colors.blue4};
`;

const CreateDate = styled.span`
  font-size: 0.8125rem;
  color: ${colors.gray4};
`;

const LikeButton = styled.button`
  width: 2.5rem;
  height: 1.6875rem;
  border: 1px solid ${colors.blue4};
  border-radius: 0.25rem;
  color: ${colors.blue4};
  margin-right: 0;
  margin-left: auto;

  :hover {
    background-color: ${colors.blue4};
    color: #fff;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.1875rem;
`;

const Preview = styled.h3`
  font-size: 1rem;
  color: ${colors.gray5};
  margin-bottom: 1rem;
`;

const ReadMore = styled.span`
  font-size: 0.8125rem;
  color: ${colors.gray4};
`;

const PostCard = ({
  image,
  author,
  createdAt,
  title,
  description,
  favoritesCount,
}) => (
  <Wrapper>
    <WriteSection>
      <UserImage src={image} alt="user-image" />
      <Info>
        <UserName>{author}</UserName>
        <CreateDate>{createdAt}</CreateDate>
      </Info>
      <LikeButton>{`Like ${favoritesCount}`}</LikeButton>
    </WriteSection>
    <Title>{title}</Title>
    <Preview>{description}</Preview>
    <ReadMore>Read more...</ReadMore>
  </Wrapper>
);

export default PostCard;
