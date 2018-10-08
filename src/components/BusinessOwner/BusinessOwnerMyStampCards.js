import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchStampCards, changeBackground } from '../../actions';
import MyStampCardItem from './fragments/items/MyStampCardItem';
import { BUSINESS_OWNER } from '../../values/Profiles';

class BusinessOwnerMyStampCards extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchStampCards(this.props.businessId);
  }

  renderItems() {
    return (
      <FlatList
        data={this.props.stampCards}
        renderItem={(stampCard) => <MyStampCardItem stampCard={stampCard} />}
      />
    );
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
            <Title>My StampCards</Title>
            {this.renderItems()}
          </Content>
        </NavBar>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stampCards: state.businessOwner.stampCards,
    background: state.common.background,
    businessId: state.profile.businessId
  };
};

export default connect(
  mapStateToProps, { fetchStampCards, changeBackground }
)(BusinessOwnerMyStampCards);
