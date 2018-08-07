import React from 'react';
import { View } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Logo } from '.';
import GetRoutesForSideBar from '../../services/GetRoutesForSideBar';

class SideBar extends React.Component {
  render() {
    const { containerStyle, logoViewStyle, listItemText, listItemStyle } = styles;
    return (
      <Container style={containerStyle}>
        <Content>
          <View style={logoViewStyle}><Logo /></View>
          <List
            dataArray={GetRoutesForSideBar.getByProfile(this.props.profile)}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => data.onPress()}
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
