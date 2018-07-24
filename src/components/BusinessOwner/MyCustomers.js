import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchMyCustomers, changeBackground } from '../../actions';
import MyCustomerItem from './fragments/items/MyCustomerItem';
import { BUSINESS_OWNER } from '../../values/Profiles';

class MyCustomers extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
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
        <NavBar
          returnBack='profileSelector'
          navigation={this.props.navigation}
          user={this.props.user}
          profile={BUSINESS_OWNER}
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
            <Title>My Customers</Title>
            {this.renderItems()}
          </Content>
        </NavBar>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myCustomers: state.businessOwner.myCustomers,
    background: state.common.background
  };
};

export default connect(
  mapStateToProps, { fetchMyCustomers, changeBackground }
)(MyCustomers);
