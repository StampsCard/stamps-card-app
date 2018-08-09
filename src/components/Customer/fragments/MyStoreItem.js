import React from 'react';
import { ListItem, Text, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class MyStoreItem extends React.Component {
  openDetail() {
    Actions.storeDetail({ store: this.props.store.item });
  }

  render() {
    const item = this.props.store.item;
    const business = item.business;
    const { cardContentStyle, nameTextStyle, amountTextStyle } = styles;
    return (
      <ListItem
        style={cardContentStyle}
        key={business.id}
        onPress={this.openDetail.bind(this)}
        bordered
      >
          <Icon active name="basket" />
          <Text style={nameTextStyle}>{business.name}</Text>
          <Text style={amountTextStyle}>{item.totalStamps} Stamps</Text>
          <Right>
              <Icon name="arrow-forward" />
          </Right>
      </ListItem>
    );
  }
}

const styles = {
    cardContentStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 2,
      borderColor: '#80ADD3',
      backgroundColor: '#fff',
      paddingLeft: 10
    },
    nameTextStyle: {
      width: 110
    },
    amountTextStyle: {
      width: 90,
      fontWeight: 'bold'
    }
};

export default MyStoreItem;
