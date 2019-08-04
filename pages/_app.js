import App, { Container } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import rootSaga from '../sagas';
import reducer from '../reducers';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height: 1.4;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
