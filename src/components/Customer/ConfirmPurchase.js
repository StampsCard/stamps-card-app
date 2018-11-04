import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Card,
  CardItem
} from 'native-base';
import { Text, Alert } from 'react-native';

import { Button, BackgroundImage, NavBar } from '../common';
import {
  fetchPurchase,
  fetchUser,
  acceptPurchaseFromConfirmation,
  cancelPurchaseFromConfirmation
} from '../../actions';
import { CUSTOMER } from '../../values/Profiles';

class ConfirmPurchase extends React.Component {

  componentWillMount() {
    this.props.fetchPurchase(this.props.purchaseId);
  }

  confirmPurchase() {
    this.props.acceptPurchaseFromConfirmation(
      this.props.purchaseId,
      this.props.user.id
    );
  }

  cancelPurchase() {
    return Alert.alert(
      'Cancel purchase',
      'Are you sure do you want to cancel this purchase?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => this.props.cancelPurchaseFromConfirmation(
            this.props.purchaseId,
            this.props.user.id
          ),
        }
      ]
    );
  }

  renderCard() {
    const {
      cardItemStyle,
      boldText
    } = styles;

    const purchase = this.props.purchase;

    return (
      <Card>
        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Business:</Text>
          <Text>
            {purchase ? purchase.stampCard.business.name : ''}
          </Text>
        </CardItem>

        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Concept:</Text>
          <Text>
            {purchase ? purchase.concept : ''}
          </Text>
        </CardItem>

        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Amount:</Text>
          <Text>
            {purchase ? purchase.amount : ''} €
          </Text>
        </CardItem>

        <CardItem style={cardItemStyle}>
          <Text style={boldText}>Stamps:</Text>
          <Text>{purchase ? purchase.stamps : ''}</Text>
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
        <NavBar
          navigation={this.props.navigation}
          profile={CUSTOMER}
          title="Confirm purchase"
        >
          <BackgroundImage />
          <Content style={contentStyle}>
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
        </NavBar>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchase: state.confirmPurchase.purchase,
    user: state.auth.user
  };
};

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

export default connect(mapStateToProps, {
    fetchPurchase,
    acceptPurchaseFromConfirmation,
    cancelPurchaseFromConfirmation,
    fetchUser
  }
)(ConfirmPurchase);
