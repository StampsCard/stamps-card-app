import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage, Title } from '../common';
import { fetchStamps, changeBackground } from '../../actions';
import MyStampCardItem from './fragments/MyStampCardItem';

class MyStampCards extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
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
        <BackgroundImage image={this.props.background} />
        <Content padder>
          <Title>My Stamp Cards</Title>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {this.renderItems()}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = {
  contentContainer: {
    alignItems: 'center'
  }
};

const mapStateToProps = (state) => {
  return {
    stampCards: state.customer.stampCards,
    background: state.common.background
  };
};

export default connect(mapStateToProps, { fetchStamps, changeBackground })(MyStampCards);
