import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';

import AuthorProfile from '../components/AuthorProfile';

const Author = ({ author }) => (
  <Layout title="Author Profile">
    <Header />
    <AuthorProfile author={author} />
  </Layout>
);

Author.getInitialProps = async ({ query, store }) => {
  const { author } = query;

  return { author };
};

export default Author;
