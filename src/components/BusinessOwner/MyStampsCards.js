import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage } from '../common';
import { fetchStampCards, changeBackground } from '../../actions';
import MyStampsCardItem from './fragments/items/MyStampsCardItem';
import { BUSINESS_OWNER } from '../../values/Profiles';

class MyStampsCards extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchStampCards(this.props.businessId);
  }

  renderItems() {
    return (
      <FlatList
        data={this.props.stampsCards}
        renderItem={(stampsCard) => <MyStampsCardItem stampsCard={stampsCard} />}
      />
    );
  }

  render() {
    return (
      <Container>
        <NavBar
          navigation={this.props.navigation}
          profile={BUSINESS_OWNER}
          title="My stamp cards"
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
            {this.renderItems()}
          </Content>
        </NavBar>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stampsCards: state.businessOwner.stampsCards,
    background: state.common.background,
    businessId: state.profile.businessId
  };
};

export default connect(
  mapStateToProps, { fetchStampCards, changeBackground }
)(MyStampsCards);
