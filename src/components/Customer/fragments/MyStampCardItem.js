import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Card, Item, H2, Text, Left, Right } from 'native-base';

class MyStampCardItem extends React.Component {

  renderStamp() {
    let i = 0;
    const item = this.props.stampCard.item;
    const stampsAmount = item.stampsAmount;
    const totalStamps = item.total;

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
        <H2 style={h2Style}>{item.businessName}</H2>
        <Card
          style={cardContentStyle}
          key={item.id}
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
              {item.stampsAmount}/{item.total} stamps
            </Text>
            <Text style={boldText}>{item.spent} €</Text>
            <Text style={boldText}>{item.discount}</Text>
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
      width: 300,
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
      color: '#FFF',
      paddingLeft: 20,
      width: 300,
      height: 250,
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
      width: 40,
      height: 40,
      margin: 10
    },

    filledStampStyle: {
      backgroundColor: '#000',
      borderRadius: 50,
      width: 40,
      height: 40,
      margin: 10
    },

    h2Style: {
      color: '#5C9CCB'
    }
};

export default MyStampCardItem;
