import React from 'react';
import {
  Card,
  CardItem,
  Text,
  Container,
  Content,
  Left,
  Right,
  Body,
  Header,
  Button as NativeButton,
  Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BackgroundImage, Button } from '../common';

class PurchaseDetail extends React.Component {
  render() {
    const { cardItemStyle, boldText, contentStyle } = styles;
    return (
      <Container>
        <BackgroundImage />
        <Header>
          <Left />
          <Body>
            <Text>Payment Details</Text>
          </Body>
          <Right>
            <NativeButton
              transparent
              onPress={() => Actions.lastPurchases()}
            >
              <Icon name="ios-arrow-dropleft" />
            </NativeButton>
          </Right>
        </Header>
        <Content style={contentStyle}>
          <Card>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>User:</Text>
              <Text>{this.props.purchase.user}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Amount:</Text>
              <Text> {this.props.purchase.amount} $</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}># of Stamps:</Text>
              <Text>{this.props.purchase.stamps}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Date:</Text>
              <Text>{this.props.purchase.confirmedAt}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Concept:</Text>
              <Text>{this.props.purchase.concept}</Text>
            </CardItem>
          </Card>

          <Button onPress={() => Actions.lastPurchases()}>
            Go back to Register Purchase
          </Button>
        </Content>
      </Container>
    );
  }
}

export default PurchaseDetail;

const styles = {
  contentStyle: {

  },
  cardItemStyle: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#80ADD3'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#80ADD3'
  }
};
