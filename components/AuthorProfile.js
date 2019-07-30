import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PostCard from './PostCard';

import colors from '../styles/colors';

import { getProfileRequest } from '../reducers/profile';

const Wrapper = styled.section``;

const InfoWrapper = styled.article`
  background-color: ${colors.gray2};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.875rem 0;
`;

const AuthorImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1.875rem;
  margin-bottom: 0.625rem;
`;

const AuthorName = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #000;
  margin-bottom: 0.3125rem;
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

const AuthorProfile = ({ author, getProfile, profile }) => {
  useEffect(() => {
    getProfile({ username: author });
  }, []);
  const { bio, following, image, username } = profile;

  return (
    <Wrapper>
      <InfoWrapper>
        <AuthorImage src={image} alt="user-image" />
        <AuthorName>{username}</AuthorName>
        <AuthorDesc>{bio}</AuthorDesc>
        {following ? null : <FollowButton type="submit">Follow</FollowButton>}
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
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

const mapDispatchToProps = dispatch => ({
  getProfile: ({ username }) => dispatch(getProfileRequest({ username })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorProfile);
