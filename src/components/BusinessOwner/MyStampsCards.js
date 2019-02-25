import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { NavBar, BackgroundImage } from '../common';
import { fetchStampsCards, changeBackground } from '../../actions';
import MyStampsCardItem from './fragments/items/MyStampsCardItem';
import { BUSINESS_OWNER } from '../../values/Profiles';

class MyStampsCards extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchStampsCards(this.props.businessId);
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
          title="My Stampscards"
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
  mapStateToProps, { fetchStampsCards, changeBackground }
)(MyStampsCards);
