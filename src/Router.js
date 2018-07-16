import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import crossroads from 'crossroads';

import LinkedRouter from './components/LinkedRouter';

import LoginForm from './components/LoginForm';
import ProfileSelector from './components/ProfileSelector';
import Welcome from './components/Welcome';

import CustomerHomeScreen from './components/Customer/CustomerHomeScreen';
import MyLastPayments from './components/Customer/MyLastPayments';
import PaymentDetail from './components/Customer/PaymentDetail';
import MyStores from './components/Customer/MyStores';
import MyStampCards from './components/Customer/MyStampCards';
import StoreDetail from './components/Customer/StoreDetail';
import ScanPurchase from './components/Customer/ScanPurchase';
import ConfirmPurchase from './components/Customer/ConfirmPurchase';
import PurchaseFinished from './components/Customer/PurchaseFinished';

import BusinessOwnerHomeScreen from './components/BusinessOwner/BusinessOwnerHomeScreen';
import MyCustomers from './components/BusinessOwner/MyCustomers';
import CustomerDetail from './components/BusinessOwner/CustomerDetail';
import LastPurchases from './components/BusinessOwner/LastPurchases';
import PurchaseDetail from './components/BusinessOwner/PurchaseDetail';
import RegisterPurchase from './components/BusinessOwner/RegisterPurchase';

class Router extends React.Component {
  render() {
    const scenes = Actions.create(
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
              key="myStores"
              component={MyStores}
              hideNavBar
            />
            <Scene
              key="paymentDetail"
              component={PaymentDetail}
              hideNavBar
            />
            <Scene
              key="storeDetail"
              component={StoreDetail}
              hideNavBar
            />
            <Scene
              key="myStampCards"
              component={MyStampCards}
              hideNavBar
            />
            <Scene
              key="scanPurchase"
              component={ScanPurchase}
              hideNavBar
            />
            <Scene
              key="confirmPurchase"
              component={ConfirmPurchase}
              hideNavBar
            />
            <Scene
              key="purchaseFinished"
              component={PurchaseFinished}
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
            <Scene
              key="lastPurchases"
              component={LastPurchases}
              hideNavBar
            />
            <Scene
              key="purchaseDetail"
              component={PurchaseDetail}
              hideNavBar
            />
            <Scene
              key="registerPurchase"
              component={RegisterPurchase}
              hideNavBar
            />
          </Scene>
        </Scene>
      </Scene>
    );

    crossroads.addRoute('customer/codeScanned/{purchaseId}', (purchaseId) => {
      Actions.confirmPurchase({ purchaseId });
    });

    return (
      <LinkedRouter scenes={scenes} scheme="stampscard" />
    );
  }
}

export default Router;
