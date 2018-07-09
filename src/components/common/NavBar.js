import React from 'react';
import { Header, Left, Body, Right, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class NavBar extends React.Component {

  openDrawer() {
    Actions.drawerOpen();
  }

  returnBack() {
    Actions.pop();
  }

  render() {
    const { headerStyle, iconStyle } = styles;
    return (
      <Header style={headerStyle}>
        <Left>
          <Button
            transparent
            onPress={this.openDrawer.bind(this)}
          >
            <Icon name="menu" style={iconStyle} />
          </Button>
        </Left>
        <Body />
        <Right>
          <Button
            transparent
            onPress={this.returnBack.bind(this)}
          >
            <Icon name="ios-arrow-dropleft" style={iconStyle} />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: '#EA5442',
    borderColor: '#F7C4BC',
  },
  iconStyle: {
    color: '#fff'
  }
};

export { NavBar };
