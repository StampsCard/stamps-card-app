import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Item } from 'native-base';

class MyStampCardItem extends React.Component {

  renderStamp() {
    let i = 0;
    const stampsAmount = this.props.stampCard.item.stampsAmount;
    const totalStamps = this.props.stampCard.item.total;

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
    const { cardContentStyle, contentContainer } = styles;
    return (
      <Card
        style={cardContentStyle}
        key={item.id}
        bordered
      >
          <ScrollView contentContainerStyle={contentContainer}>
            {this.renderStamp()}
          </ScrollView>
      </Card>
    );
  }
}

const styles = {
    cardContentStyle: {
      backgroundColor: '#5C9CCB',
      borderColor: '#80ADD3',
      borderWidth: 2,
      borderRadius: 15,
      color: '#FFF',
      paddingLeft: 20,
      width: 300,
      height: 250
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
    }
};

export default MyStampCardItem;
