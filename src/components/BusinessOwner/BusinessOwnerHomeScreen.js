import React from 'react';
import { BackHandler, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { SimpleHeader, Button, NavBar, BackgroundImage } from '../common';
import { changeBackground } from '../../actions';
import { BUSINESS_OWNER } from '../../values/Profiles';
import { PROFILE_SELECTOR } from '../../values/RouteActions';

class BusinessOwnerHomeScreen extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
  }

  componentDidMount() {
   this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress() {
    Alert.alert(
      'Logout',
      'Are you sure do you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => Actions.login() },
      ]
    );

    return true;
  }

  render() {
    const { menuButton } = styles;
    return (
      <Container>
        <NavBar
          returnBack={PROFILE_SELECTOR}
          navigation={this.props.navigation}
          profile={BUSINESS_OWNER}
          title="Business owner menu"
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
              <SimpleHeader />
              <Button style={menuButton} onPress={() => { Actions.registerPurchase(); }}>
                Register a purchase
              </Button>
              <Button style={menuButton} onPress={() => { Actions.myCustomers(); }}>
                My Customers
              </Button>
              <Button style={menuButton} onPress={() => { Actions.lastPurchases(); }}>
                Last Purchases
              </Button>
              <Button style={menuButton} onPress={() => { Actions.businessOwnerMyStampsCards(); }}>
                My Stamps Cards
              </Button>
              <Button style={menuButton} onPress={() => { Actions.createStampsCard(); }}>
                Create Stamps Card
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
    background: state.common.background,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { changeBackground }
)(BusinessOwnerHomeScreen);
