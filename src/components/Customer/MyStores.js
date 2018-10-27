import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
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
