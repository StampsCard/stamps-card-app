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

class CustomerHomeScreen extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
  }

  scanPurchase() {
      Actions.scanPurchase({ user: this.props.userLogged });
  }

  lastPayments() {
    Actions.myLastPayments({ user: this.props.userLogged });
  }

  myStores() {
    Actions.myStores({ user: this.props.userLogged });
  }

  myStampCards() {
    Actions.myStampCards({ user: this.props.userLogged });
  }

  render() {
    if (this.props.purchaseId) {
      return (<ConfirmPurchase purchaseId={this.props.purchaseId} />);
    }
    const { menuButton } = styles;
    return (
        <Container>
          <NavBar
            returnBack='profileSelector'
            navigation={this.props.navigation}
            user={this.props.userLogged}
          >
            <BackgroundImage image={this.props.background} />
            <Content padder>
                <SimpleHeader />
                <Button
                  style={menuButton}
                  onPress={this.scanPurchase.bind(this)}
                >
                  Scan a purcharse code
                </Button>
                <Button
                  style={menuButton}
                  onPress={this.myStampCards.bind(this)}
                >
                  My stamps
                </Button>
                <Button
                  style={menuButton}
                  onPress={this.lastPayments.bind(this)}
                >
                  My last payments
                </Button>
                <Button
                  style={menuButton}
                  onPress={this.myStores.bind(this)}
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
    background: state.common.background
  };
};

export default connect(
  mapStateToProps,
  { changeBackground }
)(CustomerHomeScreen);
