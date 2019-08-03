import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostCard from './PostCard';

import { getPostsRequest } from '../reducers/post';

const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(({ post }) => post.articles);
  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  return (
    <React.Fragment>
      {posts.map(post => (
        <PostCard
          key={post.slug}
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
    </React.Fragment>
  );
};

Posts.getInitialProps = async ({ store }) => {
  store.dispatch(getPostsRequest());
};

export default Posts;
