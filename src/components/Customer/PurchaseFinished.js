import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text } from 'native-base';
import { BackgroundImage, SimpleHeader, NavBar, Button } from '../common';

class PurchaseFinished extends React.Component {

  myStampCards() {
    Actions.myStampCards();
  }

  scanPurchase() {
    // Actions.scanPurchase();
  }

  render() {
    const { contentStyle, h2Style, h3Style, boldStyle, buttonStyle } = styles;
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <SimpleHeader />
        <Content style={contentStyle}>
          <Text style={h2Style}>
            The payment has been completed with success!
          </Text>
          <Text style={h3Style}>
            You need <Text style={boldStyle}>5</Text> stamps more to get a new bottle
          </Text>

          <Button style={buttonStyle} onPress={this.myStampCards.bind(this)}>
            Go to My stamps
          </Button>

          <Button style={buttonStyle} onPress={this.scanPurchase.bind(this)}>
            Register another purchase
          </Button>

        </Content>
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
      flex: 1,
      flexDirection: 'column',
      padding: 15
  },

  h2Style: {
    color: '#80ADD3',
    fontSize: 22
  },

  h3Style: {
    color: '#EA5442',
    fontSize: 15,
    marginBottom: 20
  },

  boldText: {
    fontWeight: 'bold'
  },

  buttonStyle: {
    marginVertical: 5
  }
};

export default PurchaseFinished;
