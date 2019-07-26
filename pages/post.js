import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Header from '../components/Header';

import Post from '../components/Post';

import { getPostRequest } from '../reducers/post';

const post = ({ post }) => (
  <Layout title={`Post: ${post.title}`}>
    <Header />
    <Post
      title={post.title}
      author={post.author.username}
      image={post.author.image}
      createdAt={post.createdAt}
      content={post.body}
      tags={post.tagList}
    />
  </Layout>
);

post.getInitialProps = async ({ query, store, isServer }) => {
  const { slug } = query;

  store.dispatch(getPostRequest({ slug }));

  return { slug };
};

const mapStateToProps = state => ({
  post: state.post.article,
});

const mapDispatchToProps = dispatch => ({
  getPost: ({ slug }) => dispatch(getPostRequest({ slug })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(post);
