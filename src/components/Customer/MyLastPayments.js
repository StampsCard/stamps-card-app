import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchLastPayments } from '../../actions';
import LastPaymentItem from './fragments/LastPaymentItem';

class MyLastPayments extends React.Component {

  componentWillMount() {
    this.props.fetchLastPayments(this.props.user.id);
  }

  renderItems() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.lastPayments}
        renderItem={(payment) => <LastPaymentItem payment={payment} />}
      />
    );
  }

  render() {
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <Title>My Last Payments</Title>
          {this.renderItems()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { lastPayments: state.customer.lastPayments };
};

export default connect(mapStateToProps, { fetchLastPayments })(MyLastPayments);
