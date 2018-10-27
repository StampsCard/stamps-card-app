import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage } from '../common';
import { fetchMyCustomers, changeBackground } from '../../actions';
import MyCustomerItem from './fragments/items/MyCustomerItem';
import { BUSINESS_OWNER } from '../../values/Profiles';

class MyCustomers extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchMyCustomers(this.props.businessId);
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
          navigation={this.props.navigation}
          profile={BUSINESS_OWNER}
          title="My customers"
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
    myCustomers: state.businessOwner.myCustomers,
    background: state.common.background,
    businessId: state.profile.businessId
  };
};

export default connect(
  mapStateToProps, { fetchMyCustomers, changeBackground }
)(MyCustomers);
