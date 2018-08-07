import React from 'react';
import { FlatList } from 'react-native';
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

  render() {
    return (
      <Container>
        <NavBar
          navigation={this.props.navigation}
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
    background: state.common.background,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps, { fetchLastPurchases, changeBackground }
)(LastPurchases);
