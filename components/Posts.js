import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PostCard from './PostCard';

import { getPostsRequest } from '../reducers/post';

const Posts = ({ getPosts, posts }) => {
  useEffect(() => {
    getPosts();
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
        />
      ))}
    </React.Fragment>
  );
};

Posts.getInitialProps = async ({ store, isServer }) => {
  store.dispatch(getPostsRequest());
};

const mapStateToProps = state => ({
  posts: state.post.articles,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
