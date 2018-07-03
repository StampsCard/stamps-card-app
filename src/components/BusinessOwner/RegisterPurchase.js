import React from 'react';
import {
  Container,
  Content,
  H2
} from 'native-base';
import { View } from 'react-native';

import { NavBar, BackgroundImage, Button } from '../common';
import LastPurchases from './fragments/LastPurchases';

class RegisterPurchase extends React.Component {
  render() {
    const { buttonView, lastPurchasesView, H2Style } = styles;

    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <View style={buttonView}>
            <Button>Register Purchase</Button>
          </View>
          <View style={lastPurchasesView}>
            <H2 style={H2Style}>Last Purchases</H2>
            <LastPurchases user={this.props.user} />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
    buttonView: {
      marginTop: 20,
      marginBottom: 20
    },

    lastPurchasesView: {
      alignItems: 'center',
      width: '100%'
    },

    H2Style: {
      color: '#5C9CCB',
      marginBottom: 10
    }
};

export default RegisterPurchase;
