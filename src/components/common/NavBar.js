import React from 'react';
import { Text, Alert } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar';
import { LOGIN } from '../../values/RouteActions';

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
      return this.returnToLogin();
    }

    return Actions.pop();
  }

  returnToLogin() {
    if (this.props.returnBack === LOGIN) {
      return Alert.alert(
        'Logout',
        'Are you sure do you want to logout?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => Actions.popTo(this.props.returnBack) },
        ]
      );
    }
    return Actions.popTo(this.props.returnBack);
  }

  render() {
    const { headerStyle, iconStyle, titleStyle, bodyStyle } = styles;
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        onClose={() => this.closeDrawer()}
        content={
          <SideBar navigation={this.props.navigation} />
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
          <Body style={bodyStyle}>
            <Text style={titleStyle}>{this.props.title}</Text>
          </Body>
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
    marginBottom: 15
  },
  iconStyle: {
    color: '#fff'
  },
  titleStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'

  },
  bodyStyle: {
    alignItems: 'center',
    width: '100%'
  }
};

export { NavBar };
