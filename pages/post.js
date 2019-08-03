import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';

import Loading from '../components/common/Loading';

import { getPostRequest } from '../reducers/post';

const post = ({ slug }) => {
  const dispatch = useDispatch();

  const { article, loading } = useSelector(state => state.post);

  useEffect(() => {
    dispatch(getPostRequest({ slug }));
  }, []);

  return (
    <Layout title={`Post: ${article.title}`}>
      <Header />
      {!loading ? (
        <Post
          title={article.title}
          author={article.author.username}
          image={article.author.image}
          createdAt={article.createdAt}
          content={article.body}
          tags={article.tagList}
        />
      ) : (
        <Loading size={80} />
      )}
    </Layout>
  );
};

post.getInitialProps = async ({ query, store, isServer }) => {
  const { slug } = query;

  store.dispatch(getPostRequest({ slug }));

  return { slug };
};

export default post;
