import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { SimpleHeader, Button, NavBar, BackgroundImage } from '../common';

class BusinessOwnerHomeScreen extends React.Component {
  render() {
    const { menuButton } = styles;
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
            <SimpleHeader />
            <Button style={menuButton}>
              Register a purchase
            </Button>
            <Button style={menuButton}>
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
