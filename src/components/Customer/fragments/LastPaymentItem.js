import React from 'react';
import { ListItem, Text, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class LastPaymentItem extends React.Component {
  openDetail() {
    Actions.paymentDetail({ payment: this.props.payment.item });
  }

  render() {
    const item = this.props.payment.item;
    const { cardContentStyle, nameTextStyle, amountTextStyle } = styles;
    return (
      <ListItem
        style={cardContentStyle}
        key={item.id}
        onPress={this.openDetail.bind(this)}
        bordered
      >
          <Icon active name="card" />
          <Text style={nameTextStyle}>{item.business}</Text>
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
      width: 150
    },
    amountTextStyle: {
      width: 50
    }
};

export default LastPaymentItem;
