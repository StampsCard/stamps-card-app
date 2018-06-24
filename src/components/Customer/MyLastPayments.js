import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Icon,
  Text,
  Right
} from 'native-base';
import { NavBar, BackgroundImage, Title } from '../common';

class MyLastPayments extends React.Component {
  render() {
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <Title>My Last Payments</Title>
          <Card>
            <CardItem style={styles.cardContent} bordered>
                <Icon active name="card" />
                <Text>Jumbo Supermarkt</Text>
                <Text>30.0 $</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </CardItem>
            <CardItem style={styles.cardContent} bordered>
                <Icon active name="card" />
                <Text>Jumbo Supermarkt</Text>
                <Text>30.0 $</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </CardItem>
            <CardItem style={styles.cardContent} bordered>
                <Icon active name="card" />
                <Text>Jumbo Supermarkt</Text>
                <Text>30.0 $</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
    cardContent: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottom: 1,
      borderColor: ''
    }
};

export default MyLastPayments;
