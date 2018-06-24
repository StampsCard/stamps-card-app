import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import ProfileSelector from './components/ProfileSelector';
import Welcome from './components/Welcome';
import CustomerHomeScreen from './components/Customer/CustomerHomeScreen';
import BusinessOwnerHomeScreen from './components/BusinessOwner/BusinessOwnerHomeScreen';
import MyLastPayments from './components/Customer/MyLastPayments';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" hideNavBar>
            <Scene key="login" component={LoginForm} />
            <Scene
              key="myLastPayments"
              component={MyLastPayments}
              hideNavBar
              initial
            />
          </Scene>
          <Scene key="main" hideNavBar>
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

            <Scene key="customer" hideNavBar drawer>
              <Scene
                key="customerHomeScreen"
                component={CustomerHomeScreen}
                hideNavBar
              />
              <Scene
                key="myLastPayments"
                component={MyLastPayments}
                hideNavBar
              />
            </Scene>

            <Scene
              key="businessOwner"
              hideNavBar
              drawer
            >
              <Scene
                key="businessOwnerHomeScreen"
                component={BusinessOwnerHomeScreen}
                hideNavBar
              />
            </Scene>

          </Scene>

        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
