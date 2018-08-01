import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Root } from 'native-base';

import Router from './src/Router';
import reducers from './src/reducers';

const store = createStore(
  reducers,
  {},
  applyMiddleware(ReduxThunk)
);

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
            <Router />
        </Provider>
      </Root>
    );
  }
}
