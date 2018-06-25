import React from 'react';
import { Scene, Router, Lightbox } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import ProfileSelector from './components/ProfileSelector';
import Welcome from './components/Welcome';
import CustomerHomeScreen from './components/Customer/CustomerHomeScreen';
import BusinessOwnerHomeScreen from './components/BusinessOwner/BusinessOwnerHomeScreen';
import MyLastPayments from './components/Customer/MyLastPayments';
import PaymentDetail from './components/Customer/PaymentDetail';
import MyCustomers from './components/BusinessOwner/MyCustomers';
import CustomerDetail from './components/BusinessOwner/CustomerDetail';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" hideNavBar>
            <Scene key="login" component={LoginForm} />
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

            <Lightbox>
              <Scene key="customer" hideNavBar drawer>
                <Scene
                  key="customerHomeScreen"
                  component={CustomerHomeScreen}
                  hideNavBar
                  initial
                />
                <Scene
                  key="myLastPayments"
                  component={MyLastPayments}
                  hideNavBar
                />
                <Scene
                  key="paymentDetail"
                  component={PaymentDetail}
                  hideNavBar
                />
              </Scene>
            </Lightbox>

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
              <Scene
                key="myCustomers"
                component={MyCustomers}
                hideNavBar
              />
              <Scene
                key="customerDetail"
                component={CustomerDetail}
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
