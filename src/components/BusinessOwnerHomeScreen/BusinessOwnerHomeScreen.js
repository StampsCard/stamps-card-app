import React from 'react';
import {
  Container,
  Header,
  Left,
  Icon,
  Right,
  Body,
  Content,
  Text
} from 'native-base';

import { SimpleHeader, Button } from '../common';

class BusinessOwnerHomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <Content padder>
          <SimpleHeader />

          <Button>
            <Text>Register a purchase</Text>
          </Button>
          <Button>
            <Text>My customers</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default BusinessOwnerHomeScreen;
