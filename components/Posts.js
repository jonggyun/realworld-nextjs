import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostCard from './PostCard';
import Tabs from './common/Tabs';

import { getPostsRequest, getPostByAuthorRequest } from '../reducers/post';

const Posts = () => {
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);

  const { articles: posts } = useSelector(({ post }) => post);
  const { me } = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (tabIndex === 0) {
      dispatch(getPostByAuthorRequest({ author: me.username }));
    }
    if (tabIndex !== 0 && me != null) {
      dispatch(getPostsRequest());
    }
  }, [tabIndex]);

  return (
    <React.Fragment>
      {me ? (
        <Tabs
          tabs={[{ name: 'Your Feed' }, { name: 'Global Feed' }]}
          tabIndex={tabIndex}
          handleOnClick={setTabIndex}
        />
      ) : null}
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
