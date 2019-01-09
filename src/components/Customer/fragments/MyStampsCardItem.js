import React from 'react';
import { View } from 'react-native';
import { Card, Text, Left, Right } from 'native-base';
import { STAMP_TYPE, EMPTY_TYPE } from '../../../values/StampCardTypes';
import TouchableStampsCard from './TouchableStampsCard';

class MyStampsCardItem extends React.Component {

  renderStampsCard() {
    let i = 0;
    const item = this.props.stampsCard.item;
    const stampsAmount = item.amount || 0;
    const totalStamps = item.stampsCard.total || 0;
    const {
      contentStyle
    } = styles;
    const stampTypes = [];
    for (i = 0; i < stampsAmount; ++i) stampTypes.push(STAMP_TYPE);
    for (i = 0; i < totalStamps - stampsAmount; ++i) stampTypes.push(EMPTY_TYPE);
    return (
      <View style={contentStyle}>
        <TouchableStampsCard
          stampTypes={stampTypes}
          businessName={item.stampsCard.business.name}
          stampId={item.stampsCard.id}
        />
      </View>
    );
  }

  render() {
    const item = this.props.stampsCard.item;
    const {
      boldText,
      contentStyle,
      cardInfoStyle
    } = styles;

    return (
      <View style={contentStyle}>
        {this.renderStampsCard()}
        <Card style={cardInfoStyle}>
          <Left>
            <Text>You got</Text>
            <Text>You paid</Text>
            <Text>Discount</Text>
          </Left>
          <Right>
            <Text style={boldText}>
              {item.amount}/{item.stampsCard.total} stamps
            </Text>
            <Text style={boldText}>{item.spent} €</Text>
            <Text style={boldText}>{item.stampsCard.discount}</Text>
          </Right>
        </Card>
      </View>
    );
  }
}

const styles = {
    contentStyle: {
      width: '100%',
      alignItems: 'center',
      flex: 1
    },

    boldText: {
      fontWeight: 'bold',
      marginLeft: 2,
      marginRight: 2
    },

    cardInfoStyle: {
      width: 350,
      padding: 15,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      shadowOffset: {
        width: 5,
        height: 5
      },
      marginBottom: 30,
      shadowColor: '#020202',
      shadowOpacity: 0.7,
      borderWidth: 2,
      borderRadius: 15
    },

    contentContainerItemStyle: {
    }
};

export default MyStampsCardItem;
