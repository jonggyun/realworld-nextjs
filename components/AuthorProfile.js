import React from 'react';
import styled from 'styled-components';

import PostCard from '../components/PostCard';

import colors from '../styles/colors';

const Wrapper = styled.section``;

const InfoWrapper = styled.article`
  background-color: ${colors.gray2};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0;
`;

const AuthorImage = styled.div``;

const AuthorName = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #000;
`;

const AuthorDesc = styled.h3`
  font-size: 0.875rem;
  color: ${colors.gray5};
`;

const FollowButton = styled.button`
  padding: 0.125rem 0.3125rem;
  border: 1px solid ${colors.gray8};
  border-radius: 0.25rem;
  color: ${colors.gray8};
  background-color: transparent;

  :hover {
    background-color: ${colors.gray6};
    color: #fff;
    border: 1px solid #fff;
  }
`;

const PostWrapper = styled.article``;

const AuthorProfile = ({ author }) => (
  <Wrapper>
    <InfoWrapper>
      <AuthorImage>프로필사진</AuthorImage>
      <AuthorName>유저이름</AuthorName>
      <AuthorDesc>소개</AuthorDesc>
      <FollowButton type="submit">Follow</FollowButton>
    </InfoWrapper>
    <PostWrapper>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostWrapper>
  </Wrapper>
);

export default AuthorProfile;
