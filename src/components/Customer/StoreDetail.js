import React from 'react';
import {
  Card,
  CardItem,
  Text,
  Container,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BackgroundImage, Button, HeaderDetail } from '../common';

class StoreDetail extends React.Component {
  render() {
    const { cardItemStyle, boldText, contentStyle } = styles;
    return (
      <Container>
        <BackgroundImage />
        <HeaderDetail
          title="Store Details"
          onPressBack={() => Actions.myStores()}
        />
        <Content style={contentStyle}>
          <Card>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Name:</Text>
              <Text>{this.props.store.name}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Amount of Stamps:</Text>
              <Text> {this.props.store.totalStamps} $</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Category:</Text>
              <Text>{this.props.store.category.name}</Text>
            </CardItem>
            <CardItem style={cardItemStyle}>
              <Text style={boldText}>Owner:</Text>
              <Text>{this.props.store.owner.firstName} {this.props.store.owner.lastName}</Text>
            </CardItem>
          </Card>

          <Button onPress={() => Actions.myStores()}>
            Go back to stores
          </Button>
        </Content>
      </Container>
    );
  }
}

export default StoreDetail;

const styles = {
  contentStyle: {

  },
  cardItemStyle: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#80ADD3'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#80ADD3'
  }
};
