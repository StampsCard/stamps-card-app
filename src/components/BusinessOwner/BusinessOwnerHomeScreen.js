import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { SimpleHeader, Button, NavBar, BackgroundImage } from '../common';
import { changeBackground } from '../../actions';
import { BUSINESS_OWNER } from '../../values/Profiles';

class BusinessOwnerHomeScreen extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
  }

  myCustomers() {
    Actions.myCustomers({ user: this.props.userLogged });
  }

  lastPurchases() {
    Actions.lastPurchases({ user: this.props.userLogged });
  }

  registerPurchase() {
    Actions.registerPurchase({ user: this.props.userLogged });
  }

  render() {
    const { menuButton } = styles;
    return (
      <Container>
        <NavBar
          returnBack='profileSelector'
          navigation={this.props.navigation}
          user={this.props.userLogged}
          profile={BUSINESS_OWNER}
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
              <SimpleHeader />
              <Button style={menuButton} onPress={this.registerPurchase.bind(this)}>
                Register a purchase
              </Button>
              <Button style={menuButton} onPress={this.myCustomers.bind(this)}>
                My Customers
              </Button>
              <Button style={menuButton} onPress={this.lastPurchases.bind(this)}>
                Last Purchases
              </Button>
          </Content>
        </NavBar>
      </Container>
    );
  }
}

const styles = {
  menuButton: {
    marginTop: 10,
    marginBottom: 10
  }
};

const mapStateToProps = state => {
  return {
    background: state.common.background
  };
};

export default connect(
  mapStateToProps,
  { changeBackground }
)(BusinessOwnerHomeScreen);
