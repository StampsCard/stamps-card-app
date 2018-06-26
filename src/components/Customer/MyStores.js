import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchBusinesses } from '../../actions';
import MyStoreItem from './fragments/MyStoreItem';

class MyStores extends React.Component {

  componentWillMount() {
    this.props.fetchBusinesses(this.props.user.id);
  }

  renderItems() {
    console.log(this.props.stores);
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
        <BackgroundImage />
        <Content padder>
          <Title>My Stores</Title>
          {this.renderItems()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { stores: state.customer.stores };
};

export default connect(mapStateToProps, { fetchBusinesses })(MyStores);
