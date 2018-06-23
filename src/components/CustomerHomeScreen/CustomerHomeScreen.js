import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { SimpleHeader, Button, NavBar, BackgroundImage } from '../common';

class CustomerHomeScreen extends React.Component {
  openDrawer() {
    console.log('Drawer open');
    this.props.navigation.navigate('DrawerOpen');
  }
  render() {
    const { menuButton } = styles;
    return (
      <Container>
        <NavBar
          onPressMenu={this.openDrawer.bind(this)}
        />
        <BackgroundImage />
        <Content padder>
            <SimpleHeader />
            <Button style={menuButton}>
              Scan a purcharse code
            </Button>
            <Button style={menuButton}>
              My Last Payments
            </Button>
            <Button style={menuButton}>
              Stores
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
