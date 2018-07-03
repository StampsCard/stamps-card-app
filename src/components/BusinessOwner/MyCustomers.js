import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchMyCustomers } from '../../actions';
import MyCustomerItem from './fragments/items/MyCustomerItem';

class MyCustomers extends React.Component {

  componentWillMount() {
    this.props.fetchMyCustomers(this.props.user.id);
  }

  renderItems() {
    return (
      <FlatList
        data={this.props.myCustomers}
        renderItem={(customer) => <MyCustomerItem customer={customer} />}
      />
    );
  }

  render() {
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <Title>My Customers</Title>
          {this.renderItems()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { myCustomers: state.businessOwner.myCustomers };
};

export default connect(mapStateToProps, { fetchMyCustomers })(MyCustomers);
