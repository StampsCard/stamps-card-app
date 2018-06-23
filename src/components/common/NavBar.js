import React from 'react';
import { Header, Left, Body, Right, Button, Icon } from 'native-base';

const NavBar = ({ onPressMenu }) => {
    const { headerStyle, iconStyle } = styles;
    return (
      <Header style={headerStyle}>
        <Left>
          <Button
            transparent
            onPress={onPressMenu}
          >
            <Icon name="menu" style={iconStyle} />
          </Button>
        </Left>
        <Body />
        <Right>
          <Button transparent>
            <Icon name="ios-arrow-dropleft" style={iconStyle} />
          </Button>
        </Right>
      </Header>
    );
};

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
