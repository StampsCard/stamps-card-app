import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { SimpleHeader, Button, NavBar, BackgroundImage } from '../common';

class CustomerHomeScreen extends React.Component {

  scanPurchase() {
      Actions.scanPurchase({ user: this.props.userLogged });
  }

  lastPayments() {
    Actions.myLastPayments({ user: this.props.userLogged });
  }

  myStores() {
    Actions.myStores({ user: this.props.userLogged });
  }

  myStampCards() {
    Actions.myStampCards({ user: this.props.userLogged });
  }

  confirmPurchase() {
    Actions.confirmPurchase({ user: this.props.userLogged });
  }

  render() {
    const { menuButton } = styles;
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
            <SimpleHeader />
            <Button
              style={menuButton}
              onPress={this.scanPurchase.bind(this)}
            >
              Scan a purcharse code
            </Button>
            <Button
              style={menuButton}
              onPress={this.myStampCards.bind(this)}
            >
              My stamps
            </Button>
            <Button
              style={menuButton}
              onPress={this.lastPayments.bind(this)}
            >
              My last payments
            </Button>
            <Button
              style={menuButton}
              onPress={this.myStores.bind(this)}
            >
              My stores
            </Button>

            <Button
              style={menuButton}
              onPress={this.confirmPurchase.bind(this)}
            >
              Confirm Purchase
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

export default CustomerHomeScreen;
