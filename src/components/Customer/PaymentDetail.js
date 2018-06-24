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
  Button,
  Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BackgroundImage } from '../common';

const PaymentDetail = ({ payment }) => {
  console.log(payment);
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
          <Button
            transparent
            onPress={() => Actions.pop()}
          >
            <Icon name="ios-arrow-dropleft" />
          </Button>
        </Right>
      </Header>
      <Content style={contentStyle}>
        <Card>
          <CardItem style={cardItemStyle}>
            <Text style={boldText}>Business:</Text>
            <Text>MediaMarkt</Text>
          </CardItem>
          <CardItem style={cardItemStyle}>
            <Text style={boldText}>Amount:</Text>
            <Text> 10.0 $</Text>
          </CardItem>
          <CardItem style={cardItemStyle}>
            <Text style={boldText}># of Stamps:</Text>
            <Text>5</Text>
          </CardItem>
          <CardItem style={cardItemStyle}>
            <Text style={boldText}>Date:</Text>
            <Text>20-02-2018</Text>
          </CardItem>
          <CardItem style={cardItemStyle}>
            <Text style={boldText}>Concept:</Text>
            <Text>Some stuff</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default PaymentDetail;

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
