import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ProfileSelector from './components/ProfileSelector';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="auth" hideNavBar>
            <Scene key="login" component={LoginForm} initial />

          </Scene>
          <Scene key="select">
            <Scene
              key="profileSelector"
              component={ProfileSelector}
              hideNavBar
              initial
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
