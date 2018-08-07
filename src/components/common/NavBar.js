import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { SideBar } from '.';

class NavBar extends React.Component {

  closeDrawer = () => {
    if (this.drawer) {
      this.drawer._root.close();
    }
  }

  openDrawer = () => {
    if (this.drawer) {
      this.drawer._root.open();
    }
  }

  returnBack() {
    if (this.props.returnBack) {
      return Actions.popTo(this.props.returnBack);
    }

    return Actions.pop();
  }

  render() {
    const { headerStyle, iconStyle } = styles;
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        onClose={() => this.closeDrawer()}
        content={
          <SideBar
            navigation={this.props.navigation}
            profile={this.props.profile}
          />
        }
      >
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
        {this.props.children}
      </Drawer>

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
