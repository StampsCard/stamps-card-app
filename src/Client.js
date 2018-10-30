import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const NETWORK_INTERFACE_URL = 'https://stamps-card-api-kxoamvvoso.now.sh/'

const Client = new ApolloClient({
  link: new HttpLink({ uri: NETWORK_INTERFACE_URL }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

export default Client;
