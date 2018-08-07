import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { SimpleHeader, Button, NavBar, BackgroundImage } from '../common';
import { changeBackground } from '../../actions';
import ConfirmPurchase from './ConfirmPurchase';
import { CUSTOMER } from '../../values/Profiles';

class CustomerHomeScreen extends React.Component {

  componentWillMount() {
    console.log(this.props);
    this.returnBack = this.defineReturnBackRoute();
    this.props.changeBackground();
  }

  defineReturnBackRoute() {
    if (this.props.hasBusiness) {
      return 'profileSelector';
    }
    return 'login';
  }

  render() {
    if (this.props.purchaseId) {
      return (<ConfirmPurchase purchaseId={this.props.purchaseId} />);
    }
    const { menuButton } = styles;
    return (
        <Container>
          <NavBar
            returnBack={this.returnBack}
            navigation={this.props.navigation}
            profile={CUSTOMER}
          >
            <BackgroundImage image={this.props.background} />
            <Content padder>
                <SimpleHeader />
                <Button
                  style={menuButton}
                  onPress={() => { Actions.scanPurchase(); }}
                >
                  Scan a purcharse code
                </Button>
                <Button
                  style={menuButton}
                  onPress={() => { Actions.myStampCards(); }}
                >
                  My stamps
                </Button>
                <Button
                  style={menuButton}
                  onPress={() => { Actions.myLastPayments(); }}
                >
                  My last payments
                </Button>
                <Button
                  style={menuButton}
                  onPress={() => { Actions.myStores(); }}
                >
                  My stores
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
)(CustomerHomeScreen);
