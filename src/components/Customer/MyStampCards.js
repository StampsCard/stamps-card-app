import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchStamps } from '../../actions';
import MyStampCardItem from './fragments/MyStampCardItem';

class MyStampCards extends React.Component {

  componentWillMount() {
    this.props.fetchStamps(this.props.user.id);
  }

  renderItems() {
    return (
      <FlatList
        data={this.props.stampCards}
        renderItem={(stampCard) => <MyStampCardItem stampCard={stampCard} />}
      />
    );
  }

  render() {
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <Title>My Stamp Cards</Title>
          {this.renderItems()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.customer);
  return { stampCards: state.customer.stampCards };
};

export default connect(mapStateToProps, { fetchStamps })(MyStampCards);
