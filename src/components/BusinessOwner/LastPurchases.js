import React from 'react';
import { FlatList, BackHandler } from 'react-native';
import {
  Container,
  Content,
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchLastPurchases, changeBackground } from '../../actions';
import LastPurchaseItem from './fragments/items/LastPurchaseItem';
import { NavBar, BackgroundImage } from '../common';
import { BUSINESS_OWNER } from '../../values/Profiles';

class LastPurchases extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchLastPurchases(this.props.businessId);
  }

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
    return (
      <Container>
        <NavBar
          navigation={this.props.navigation}
          profile={BUSINESS_OWNER}
          title="Last purchases"
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
            <FlatList
              data={this.props.lastPurchases}
              renderItem={(purchase) => <LastPurchaseItem purchase={purchase} />}
            />
          </Content>
        </NavBar>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lastPurchases: state.businessOwner.lastPurchases,
    background: state.common.background,
    businessId: state.profile.businessId
  };
};

export default connect(
  mapStateToProps, { fetchLastPurchases, changeBackground }
)(LastPurchases);
