import React from 'react';
import { ListItem, Text, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class LastPurchaseItem extends React.Component {
  openDetail() {
    Actions.purchaseDetail({ purchase: this.props.purchase.item });
  }

  render() {
    const item = this.props.purchase.item;
    const { cardContentStyle, nameTextStyle, amountTextStyle } = styles;
    return (
      <ListItem
        style={cardContentStyle}
        key={item.id}
        onPress={this.openDetail.bind(this)}
        bordered
      >
          <Icon active name="card" />
          <Text style={nameTextStyle}>{item.user.firstName} {item.user.lastName}</Text>
          <Text>{item.stamps} Stamps</Text>
          <Text style={amountTextStyle}>{item.amount}$</Text>
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
      width: 90
    },
    amountTextStyle: {
      width: 50
    }
};

export default LastPurchaseItem;
