import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import ProfileSelector from './components/ProfileSelector';
import Welcome from './components/Welcome';
import MyCustomers from './components/MyCustomers';
import MyStores from './components/MyStores';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="auth" hideNavBar>
            <Scene key="login" component={LoginForm} initial />

          </Scene>
          <Scene key="main">
            <Scene
              key="profileSelector"
              component={ProfileSelector}
              hideNavBar
              initial
            />

            <Scene
              key="welcome"
              component={Welcome}
              hideNavBar
            />

            <Scene
              key="myCustomers"
              component={MyCustomers}
            />

            <Scene
              key="myStores"
              component={MyStores}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
