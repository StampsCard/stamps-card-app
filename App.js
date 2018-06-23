import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Root } from 'native-base';

import Router from './src/Router';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {

  async componentWillMount() {
      await Expo.Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
  }

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
