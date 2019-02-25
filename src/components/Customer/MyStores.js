import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage } from '../common';
import { fetchBusinesses, changeBackground } from '../../actions';
import MyStoreItem from './fragments/MyStoreItem';
import { CUSTOMER } from '../../values/Profiles';

class MyStores extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchBusinesses(this.props.user.id);
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
        data={this.props.stores}
        renderItem={(store) => <MyStoreItem store={store} />}
      />
    );
  }

  render() {
    return (
      <Container>
        <NavBar
          navigation={this.props.navigation}
          profile={CUSTOMER}
          title="My stores"
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
    stores: state.customer.stores,
    background: state.common.background,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps, { fetchBusinesses, changeBackground }
)(MyStores);
