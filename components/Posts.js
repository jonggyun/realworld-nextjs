import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostCard from './PostCard';
import Tabs from './common/Tabs';

import { getPostsRequest } from '../reducers/post';

const Posts = () => {
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);

  const posts = useSelector(({ post }) => post.articles);
  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  return (
    <React.Fragment>
      <Tabs
        tabs={[{ name: 'Your Feed' }, { name: 'Global Feed' }]}
        tabIndex={tabIndex}
        handleOnClick={setTabIndex}
      />
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
