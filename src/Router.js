import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ProfileSelector from './components/ProfileSelector';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" initial />
          </Scene>
          <Scene key="main">
            <Scene
              key="ProfileSelector"
              component={ProfileSelector}
              title="Select a Profile"
              rightTitle="Add"
              initial
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
