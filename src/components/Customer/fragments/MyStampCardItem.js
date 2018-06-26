import React from 'react';
import { Card } from 'native-base';

class MyStampCardItem extends React.Component {

  render() {
    const item = this.props.stampCard.item;
    const { cardContentStyle } = styles;
    return (
      <Card
        style={cardContentStyle}
        key={item.id}
        bordered
      />
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
    }
};

export default MyStampCardItem;
