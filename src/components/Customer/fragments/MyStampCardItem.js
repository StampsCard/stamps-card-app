import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Card, Item, H2, Text, Left, Right } from 'native-base';

class MyStampCardItem extends React.Component {

  renderStamp() {
    let i = 0;
    const item = this.props.stampCard.item;
    const stampsAmount = item.amount || 0;
    const totalStamps = item.stampCard.total || 0;

    const stamps = [];
    const { filledStampStyle, emptyStampStyle } = styles;

    for (i = 0; i < stampsAmount; ++i) {
        stamps.push(
          <Item style={filledStampStyle}>
            <Image
              source={require('../../../../resources/img/stamp.png')}
              style={{ width: 50, height: 50 }}
            />
          </Item>
        );
    }

    for (i = 0; i < totalStamps - stampsAmount; ++i) {
        stamps.push(<Item style={emptyStampStyle} />);
    }


    return stamps;
  }

  render() {
    const item = this.props.stampCard.item;
    const {
      cardContentStyle,
      contentContainer,
      h2Style,
      boldText,
      contentStyle,
      cardInfoStyle
    } = styles;

    return (
      <View style={contentStyle}>
        <H2 style={h2Style}>{item.stampCard.business.name}</H2>
        <Card
          style={cardContentStyle}
          bordered
        >
            <ScrollView contentContainerStyle={contentContainer}>
              {this.renderStamp()}
            </ScrollView>
        </Card>

        <Card style={cardInfoStyle}>
          <Left>
            <Text>You got</Text>
            <Text>You paid</Text>
            <Text>Discount</Text>
          </Left>
          <Right>
            <Text style={boldText}>
              {item.amount}/{item.stampCard.total} stamps
            </Text>
            <Text style={boldText}>{item.spent} €</Text>
            <Text style={boldText}>{item.stampCard.discount}</Text>
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

    cardContentStyle: {
      backgroundColor: '#5C9CCB',
      borderColor: '#80ADD3',
      borderWidth: 2,
      borderRadius: 15,
      paddingLeft: 20,
      width: 350,
      height: 280,
      shadowOffset: {
        width: 5,
        height: 5
      },
      marginBottom: 5,
      shadowColor: '#020202',
      shadowOpacity: 0.7
    },

    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },

    emptyStampStyle: {
      backgroundColor: '#fff',
      borderRadius: 50,
      width: 50,
      height: 50,
      margin: 10
    },

    filledStampStyle: {
      backgroundColor: '#000',
      borderRadius: 50,
      width: 50,
      height: 50,
      margin: 10
    },

    h2Style: {
      color: '#5C9CCB'
    }
};

export default MyStampCardItem;
