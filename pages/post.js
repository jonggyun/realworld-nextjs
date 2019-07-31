import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';

import Loading from '../components/common/Loading';

import { getPostRequest } from '../reducers/post';

const post = ({ postInfo, loading }) => (
  <Layout title={`Post: ${postInfo.title}`}>
    <Header />
    {!loading ? (
      <Post
        title={postInfo.title}
        author={postInfo.author.username}
        image={postInfo.author.image}
        createdAt={postInfo.createdAt}
        content={postInfo.body}
        tags={postInfo.tagList}
      />
    ) : (
      <Loading size={80} />
    )}
  </Layout>
);

post.getInitialProps = async ({ query, store, isServer }) => {
  const { slug } = query;

  store.dispatch(getPostRequest({ slug }));

  return { slug };
};

const mapStateToProps = state => ({
  postInfo: state.post.article,
  loading: state.post.loading,
});

const mapDispatchToProps = dispatch => ({
  getPost: ({ slug }) => dispatch(getPostRequest({ slug })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(post);
