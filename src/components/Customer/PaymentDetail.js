import React from 'react';
import {
  Card,
  CardItem,
  Text,
  Container,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BackgroundImage, Button, HeaderDetail } from '../common';

class PaymentDetail extends React.Component {
  render() {
    const { cardItemStyle, boldText, contentStyle } = styles;
    return (
      <Container>
        <BackgroundImage />
        <HeaderDetail
          title="Payment Detail"
          onPressBack={() => Actions.myLastPayments()}
        />
        <Content style={contentStyle}>
          <Card>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Business:</Text>
              <Text>{this.props.payment.stampCard.business.name}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Amount:</Text>
              <Text> {this.props.payment.amount} $</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}># of Stamps:</Text>
              <Text>{this.props.payment.stamps}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Date:</Text>
              <Text>{this.props.payment.confirmedAt}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Concept:</Text>
              <Text>{this.props.payment.concept}</Text>
            </CardItem>
          </Card>

          <Button onPress={() => Actions.myLastPayments()}>
            Go back to payments
          </Button>
        </Content>
      </Container>
    );
  }
}

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
