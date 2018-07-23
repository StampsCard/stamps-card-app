import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Logo } from '.';

class SideBar extends React.Component {
  goToRoute(routekey) {
    Actions.push(routekey, { user: this.props.user });
  }

  render() {
    console.log(this.props);
    const { containerStyle, logoViewStyle, listItemText, listItemStyle } = styles;
    return (
      <Container style={containerStyle}>
        <Content>
          <View style={logoViewStyle}><Logo /></View>
          <List
            dataArray={customerRoutes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={this.goToRoute.bind(this, data.key)}
                  style={listItemStyle}
                >
                  <Text style={listItemText}>{data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const customerRoutes = [
  {
    key: 'customerHomeScreen',
    name: 'Home'
  },
  {
    key: 'myLastPayments',
    name: 'My last payments'
  },
  {
    key: 'myStores',
    name: 'My stores'
  },
  {
    key: 'myStampCards',
    name: 'My stamps cards'
  },
  {
    key: 'scanPurchase',
    name: 'Scan purchase'
  }
];

const styles = {
  containerStyle: {
    backgroundColor: '#EA5442',
    borderColor: '#F7C4BC',
  },
  logoViewStyle: {
    alignItems: 'center',
    marginVertical: 10
  },
  listItemStyle: {
    borderColor: '#F7C4BC'
  },
  listItemText: {
    color: '#fff',
    fontWeight: 'bold'
  }
};

export { SideBar };
