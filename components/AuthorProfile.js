import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import PostCard from './PostCard';
import Loading from './common/Loading';

import colors from '../styles/colors';

import { getProfileRequest } from '../reducers/profile';
import {
  getPostByAuthorRequest,
  getFavoritePostsRequest,
} from '../reducers/post';

const Wrapper = styled.section``;

const InfoWrapper = styled.article`
  background-color: ${colors.gray2};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.875rem 0;
  margin-bottom: 1.25rem;
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

const tabWidth = '20rem';

const Tabs = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1rem;
  font-weight: bold;
  width: ${tabWidth};
  justify-content: center;
`;

const Tab = styled.li`
  width: 50%;
  border-bottom: 1px solid ${colors.gray3};
  padding: 0.625rem 0;
  text-align: center;
`;

const TabBorder = styled.div`
  border: 2px solid ${colors.blue9};
  width: calc(${tabWidth} / 2);
  box-sizing: border-box;
  transform: ${({ tabIndex }) =>
    `translateX(${100 * parseInt(tabIndex, 10)}%)`};
  transition-duration: 0.3s;
`;

const PostWrapper = styled.article``;

const AuthorProfile = ({ author }) => {
  const dispatch = useDispatch();

  const profileLoading = useSelector(({ profile }) => profile.loading);
  const { bio, following, image, username } = useSelector(
    ({ profile }) => profile.profile,
  );
  const postsLoading = useSelector(({ post }) => post.loading);
  const posts = useSelector(({ post }) => post.articles);
  const favorites = useSelector(({ post }) => post.favorites);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    dispatch(getProfileRequest({ author }));
    dispatch(getPostByAuthorRequest({ author }));
    dispatch(getFavoritePostsRequest({ username: author }));
  }, []);

  return (
    <Wrapper>
      {!profileLoading && !postsLoading ? (
        <React.Fragment>
          <InfoWrapper>
            <AuthorImage src={image} alt="user-image" />
            <AuthorName>{username}</AuthorName>
            <AuthorDesc>{bio}</AuthorDesc>
            {following ? null : (
              <FollowButton type="submit">Follow</FollowButton>
            )}
          </InfoWrapper>
          <Tabs>
            <Tab onClick={() => setTabIndex(0)}>My Articles</Tab>
            <Tab onClick={() => setTabIndex(1)}>Favorites Articles</Tab>
          </Tabs>
          <TabBorder tabIndex={tabIndex} />
          <PostWrapper>
            {(tabIndex === 0 ? posts : favorites).map(post => (
              <PostCard
                key={post.createdAt}
                image={post.author.image}
                author={post.author.username}
                createdAt={post.createdAt}
                title={post.title}
                description={post.description}
                favoritesCount={post.favoritesCount}
                tagList={post.tagList}
                slug={post.slug}
              />
            ))}
          </PostWrapper>
        </React.Fragment>
      ) : (
        <Loading size={80} />
      )}
    </Wrapper>
  );
};

export default AuthorProfile;
