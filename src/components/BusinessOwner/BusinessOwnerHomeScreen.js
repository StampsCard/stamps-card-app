import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { SimpleHeader, Button, NavBar, BackgroundImage } from '../common';

class BusinessOwnerHomeScreen extends React.Component {

  myCustomers() {
    Actions.myCustomers({ user: this.props.userLogged });
  }

  lastPurchases() {
    Actions.lastPurchases({ user: this.props.userLogged });
  }

  render() {
    const { menuButton } = styles;
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
            <SimpleHeader />
            <Button style={menuButton} onPress={this.lastPurchases.bind(this)}>
              Register a purchase
            </Button>
            <Button style={menuButton} onPress={this.myCustomers.bind(this)}>
              My Customers
            </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  menuButton: {
    marginTop: 10,
    marginBottom: 10
  }
};

export default BusinessOwnerHomeScreen;
