import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchBusinesses, changeBackground } from '../../actions';
import MyStoreItem from './fragments/MyStoreItem';

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
        <NavBar />
        <BackgroundImage image={this.props.background} />
        <Content padder>
          <Title>My Stores</Title>
          {this.renderItems()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stores: state.customer.stores,
    background: state.common.background
  };
};

export default connect(
  mapStateToProps, { fetchBusinesses, changeBackground }
)(MyStores);
