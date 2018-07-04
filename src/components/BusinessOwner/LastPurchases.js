import React from 'react';
import { FlatList, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  H2
} from 'native-base';
import { connect } from 'react-redux';

import { fetchLastPurchases } from '../../actions';
import LastPurchaseItem from './fragments/items/LastPurchaseItem';
import { NavBar, BackgroundImage, Button } from '../common';

class LastPurchases extends React.Component {

  componentWillMount() {
    this.props.fetchLastPurchases(this.props.user.id);
  }

  registerPurchase() {
    Actions.registerPurchase({ user: this.props.user });
  }


  render() {
    const { buttonView, lastPurchasesView, H2Style } = styles;

    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <View style={buttonView}>
            <Button onPress={this.registerPurchase.bind(this)}>
              Register Purchase
            </Button>
          </View>
          <View style={lastPurchasesView}>
            <H2 style={H2Style}>Last Purchases</H2>
            <FlatList
              style={styles.listStyle}
              data={this.props.lastPurchases}
              renderItem={(purchase) => <LastPurchaseItem purchase={purchase} />}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { lastPurchases: state.businessOwner.lastPurchases };
};

const styles = {
    buttonView: {
      marginTop: 20,
      marginBottom: 20
    },

    lastPurchasesView: {
      alignItems: 'center',
      width: '100%'
    },

    H2Style: {
      color: '#5C9CCB',
      marginBottom: 10
    }
};

export default connect(mapStateToProps, { fetchLastPurchases })(LastPurchases);
