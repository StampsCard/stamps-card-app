import React from 'react';
import { BackHandler } from 'react-native'; 
import {
  Card,
  CardItem,
  Text,
  Container,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BackgroundImage, Button, HeaderDetail } from '../common';

class CustomerDetail extends React.Component {
  
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress.bind(this)
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress() {
    return Actions.pop();
  }

  render() {
    const customer = this.props.customer;
    const user = customer.user;
    const { cardItemStyle, boldText, contentStyle } = styles;
    return (
      <Container>
        <BackgroundImage />
        <HeaderDetail
          title="Customer Details"
          onPressBack={() => Actions.myCustomers()}
        />
        <Content style={contentStyle}>
          <Card>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Name:</Text>
              <Text>
                {user.firstName} {user.LastName}
              </Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Email:</Text>
              <Text> {user.email}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Last Payment</Text>
              <Text>{customer.lastPayment}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Total spent</Text>
              <Text>{customer.spent}</Text>
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
