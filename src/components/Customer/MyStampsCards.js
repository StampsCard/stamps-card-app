import React from 'react';
import {
  Container,
  Content
} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, BackgroundImage } from '../common';
import { fetchStamps, changeBackground } from '../../actions';
import MyStampsCardItem from './fragments/MyStampsCardItem';
import { CUSTOMER } from '../../values/Profiles';

class MyStampsCards extends React.Component {

  componentWillMount() {
    this.props.changeBackground();
    this.props.fetchStamps(this.props.user.id);
  }

  renderItems() {
    return (
      <FlatList
        data={this.props.stampCards}
        style={styles.listStyle}
        keyExtractor={(item) => item.stampCard.id}
        renderItem={(stampCard) => <MyStampsCardItem stampCard={stampCard} />}
      />
    );
  }

  render() {
    return (
      <Container contentContainerStyle={styles.contentContainerStyle}>
        <NavBar
          navigation={this.props.navigation}
          profile={CUSTOMER}
          title="My Stamps Cards"
        >
          <BackgroundImage image={this.props.background} />
          <Content padder style={styles.contentStyle}>
            {this.renderItems()}
          </Content>
        </NavBar>
      </Container>
    );
  }
}

const styles = {
  contentContainerStyle: {
    flex: 1
  },
  contentStyle: {
    flex: 1
  },
  listStyle: {
    flex: 1
  }
};

const mapStateToProps = (state) => {
  return {
    stampCards: state.customer.stampCards,
    background: state.common.background,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { fetchStamps, changeBackground })(MyStampsCards);
