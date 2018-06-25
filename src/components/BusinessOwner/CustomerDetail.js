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

class CustomerDetail extends React.Component {
  render() {
    const { cardItemStyle, boldText, contentStyle } = styles;
    return (
      <Container>
        <BackgroundImage />
        <Header>
          <Left />
          <Body>
            <Text>Customer Details</Text>
          </Body>
          <Right>
            <NativeButton
              transparent
              onPress={() => Actions.myCustomers()}
            >
              <Icon name="ios-arrow-dropleft" />
            </NativeButton>
          </Right>
        </Header>
        <Content style={contentStyle}>
          <Card>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Name:</Text>
              <Text>
                {this.props.customer.firstName} {this.props.customer.LastName}
              </Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Email:</Text>
              <Text> {this.props.customer.email}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Last Payment</Text>
              <Text>{this.props.customer.lastPayment}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Total spent</Text>
              <Text>{this.props.customer.spent}</Text>
            </CardItem>
          </Card>

          <Button onPress={() => Actions.myCustomers()}>
            Go back to my customers
          </Button>
        </Content>
      </Container>
    );
  }
}

export default CustomerDetail;

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
