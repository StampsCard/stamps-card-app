import React from 'react';
import { ListItem, Text, Right, Icon } from 'native-base';

const LastPaymentItem = ({ payment }) => {
  const item = payment.item;
  const { cardContentStyle, nameTextStyle, amountTextStyle } = styles;
  return (
    <ListItem style={cardContentStyle} bordered>
        <Icon active name="card" />
        <Text style={nameTextStyle}>{item.business}</Text>
        <Text style={amountTextStyle}>{item.amount}$</Text>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
    </ListItem>
  );
};

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
