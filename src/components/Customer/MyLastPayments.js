import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { NavBar, BackgroundImage } from '../common';
import { fetchLastPayments, changeBackground } from '../../actions';
import LastPaymentItem from './fragments/LastPaymentItem';
import { CUSTOMER } from '../../values/Profiles';

class MyLastPayments extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchLastPayments(this.props.user.id);
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
        data={this.props.lastPayments}
        renderItem={(payment) => <LastPaymentItem payment={payment} />}
      />
    );
  }

  render() {
    return (
      <Container>
        <NavBar
          navigation={this.props.navigation}
          profile={CUSTOMER}
          title="My last payments"
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
    lastPayments: state.customer.lastPayments,
    background: state.common.background,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { fetchLastPayments, changeBackground }
)(MyLastPayments);
