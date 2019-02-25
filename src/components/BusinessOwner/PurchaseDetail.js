import React from 'react';
import {
  Card,
  CardItem,
  Text,
  Container,
  Content
} from 'native-base';
import { BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BackgroundImage, Button, HeaderDetail } from '../common';

class PurchaseDetail extends React.Component {
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
    const { cardItemStyle, boldText, contentStyle } = styles;
    const user = this.props.purchase.user;
    return (
      <Container>
        <BackgroundImage />
        <HeaderDetail
          title="Purchase Details"
          onPressBack={() => Actions.lastPurchases()}
        />
        <Content style={contentStyle}>
          <Card>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>User:</Text>
              <Text>{user.firstName} {user.lastName}</Text>
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
