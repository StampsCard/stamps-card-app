import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Root } from 'native-base';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Router from './src/Router';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://stamps-card-api-lmjpnzzxql.now.sh/' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Router />
          </ApolloProvider>
        </Provider>
      </Root>
    );
  }
}
