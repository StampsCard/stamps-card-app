import ApolloClient from 'apollo-client';
import { AsyncStorage } from 'react-native';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const NETWORK_INTERFACE_URL = 'https://stampscard.app';

const httpLink = createHttpLink({
  uri: NETWORK_INTERFACE_URL
});

const authLink = setContext(async(_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('userJwt');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const Client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

export default Client;
