import React from 'react';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
} from 'native-base';
import { connect } from 'react-redux';

import { fetchLastPurchases, changeBackground } from '../../actions';
import LastPurchaseItem from './fragments/items/LastPurchaseItem';
import { NavBar, BackgroundImage, Title } from '../common';
import { BUSINESS_OWNER } from '../../values/Profiles';

class LastPurchases extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchLastPurchases(this.props.user.id);
  }

  registerPurchase() {
    Actions.registerPurchase({ user: this.props.user });
  }


  render() {
    return (
      <Container>
        <NavBar
          returnBack='profileSelector'
          navigation={this.props.navigation}
          user={this.props.user}
          profile={BUSINESS_OWNER}
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
            <Title>Last Purchases</Title>
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
    background: state.common.background
  };
};

export default connect(
  mapStateToProps, { fetchLastPurchases, changeBackground }
)(LastPurchases);
