import React from 'react';
import { View } from 'react-native';
import { Card, H2, Text, Left, Right } from 'native-base';

class MyStampsCardItem extends React.Component {

  render() {
    const item = this.props.stampsCard.item;
    const {
      h2Style,
      boldText,
      contentStyle,
      cardInfoStyle
    } = styles;

    return (
      <View style={contentStyle}>
        <H2 style={h2Style}>{item.discount}</H2>
        <Card style={cardInfoStyle}>
          <Left>
            <Text>Price of stamp</Text>
            <Text>Stamps for discount</Text>
          </Left>
          <Right>
            <Text style={boldText}>{item.stamp_price} €</Text>
            <Text style={boldText}>{item.total}</Text>
          </Right>
        </Card>
      </View>
    );
  }
}

const styles = {
    contentStyle: {
      width: '100%',
      alignItems: 'center'
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

    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: 350
    },

    h2Style: {
      color: '#5C9CCB'
    },
    // TODO: Pending to add a border between first text left and right text left
    leftContainer: {
      borderBotttomWidth: 2,
      borderColor: '#5C9CCB'
    }
};

export default MyStampsCardItem;
