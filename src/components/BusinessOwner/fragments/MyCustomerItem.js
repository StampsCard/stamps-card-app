import React from 'react';
import { ListItem, Text, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class MyCustomerItem extends React.Component {
  openDetail() {
    Actions.customerDetail({ customer: this.props.customer.item });
  }

  render() {
    const item = this.props.customer.item;
    const { cardContentStyle, nameTextStyle, emailTextStyle } = styles;
    return (
      <ListItem
        style={cardContentStyle}
        key={item.id}
        onPress={this.openDetail.bind(this)}
        bordered
      >
          <Icon active name="contact" />
          <Text style={nameTextStyle}>{item.firstName} {item.lastName}</Text>
          <Text style={emailTextStyle}>{item.email}</Text>
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
    emailTextStyle: {
      width: 110,
      fontSize: 10
    }
};

export default MyCustomerItem;
