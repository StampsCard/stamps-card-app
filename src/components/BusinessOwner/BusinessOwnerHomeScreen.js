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

  render() {
    const { menuButton } = styles;
    return (
      <Container>
        <NavBar
          returnBack='profileSelector'
          navigation={this.props.navigation}
          user={this.props.user}
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
              <Button style={menuButton} onPress={() => { Actions.businessOwnerMyStampCards(); }}>
                My Stamp Cards
              </Button>
              <Button style={menuButton} onPress={() => { Actions.createStampCard(); }}>
                Create Stamp Card
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
