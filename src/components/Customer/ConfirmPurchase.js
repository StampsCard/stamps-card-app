import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Card,
  CardItem
} from 'native-base';
import { Text } from 'react-native';

import { Title, Button, BackgroundImage, NavBar } from '../common';
import {
  fetchPurchase,
  confirmPurchase,
  cancelPurchaseFromConfirmation
} from '../../actions';

class ConfirmPurchase extends React.Component {
  componentWillMount() {
    //this.props.paymentId from Linking
    this.props.fetchPurchase(1);
  }

  confirmPurchase() {
    //user from the logged in
    this.props.confirmPurchase(1, 1);
  }

  cancelPurchase() {
    //user from the logged in
    this.props.cancelPurchaseFromConfirmation(1, 1);
  }

  renderCard() {
    const {
      cardItemStyle,
      boldText
    } = styles;

    return (
      <Card>
        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Business:</Text>
          <Text>{this.props.purchase.business}</Text>
        </CardItem>

        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Concept:</Text>
          <Text>{this.props.purchase.concept}</Text>
        </CardItem>

        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Amount:</Text>
          <Text>{this.props.purchase.amount} €</Text>
        </CardItem>

        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Stamps:</Text>
          <Text>{this.props.purchase.stamps}</Text>
        </CardItem>
      </Card>
    );
  }

  render() {
    const {
      confirmButtonStyle,
      cancelButtonStyle,
      contentStyle
    } = styles;
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content style={contentStyle}>
          <Title>Confirm purchase</Title>
          {this.renderCard()}
          <Button
            onPress={this.confirmPurchase.bind(this)}
            style={confirmButtonStyle}
          >
            CONFIRM
          </Button>
          <Button
            onPress={this.cancelPurchase.bind(this)}
            style={cancelButtonStyle}
          >
            CANCEL
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('State', state.confirmPurchase);

  return { purchase: state.confirmPurchase.purchase };
};

export default connect(
  mapStateToProps, {
    fetchPurchase,
    confirmPurchase,
    cancelPurchaseFromConfirmation
  }
)(ConfirmPurchase);

const styles = {
  contentStyle: {
    padding: 15
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
  },

  confirmButtonStyle: {
    marginVertical: 15
  },

  cancelButtonStyle: {
    marginVertical: 0,
    opacity: 0.6
  }
};
