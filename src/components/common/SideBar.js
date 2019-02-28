import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, List, ListItem, Icon } from 'native-base';
import { Logo, ButtonSecondary } from '.';
import { businessOwnerSelected, customerSelected, logout } from '../../actions';
import GetRoutesForSideBar from '../../services/GetRoutesForSideBar';

class SideBar extends React.Component {

  pressBusinessOwnerButton() {
    this.props.businessOwnerSelected(this.props.user.id);
  }

  pressCustomerButton() {
    this.props.customerSelected(true);
  }

  pressLogout() {
    Alert.alert(
      'Logout',
      'Are you sure do you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => this.props.logout() },
      ]
    );
  }

  renderProfileSwitcher() {
    if (this.props.isBusinessOwner) {
      const {
        listItemText,
        profileSelectionStyle,
        profileSelectionButtonStyle,
        iconStyle,
        profileContainerButtonsStyle
      } = styles;

      return (
        <View style={profileSelectionStyle}>
            <Text style={listItemText}>Switch your profile</Text>
            <View style={profileContainerButtonsStyle}>
              <ButtonSecondary
                onPress={this.pressCustomerButton.bind(this)}
                style={profileSelectionButtonStyle}
              >
                <Icon style={iconStyle} active name="cart" />
              </ButtonSecondary>
              <ButtonSecondary
                onPress={this.pressBusinessOwnerButton.bind(this)}
                style={profileSelectionButtonStyle}
              >
                <Icon style={iconStyle} active name="cash" />
              </ButtonSecondary>
            </View>
        </View>
      );
    }
  }

  render() {
    const {
      containerStyle,
      contentStyle,
      logoViewStyle,
      listItemText,
      listItemStyle,
      logoutButtonStyle
    } = styles;
    return (
      <Container style={containerStyle}>
        <Content style={contentStyle}>
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

        {this.renderProfileSwitcher()}

        <ButtonSecondary style={logoutButtonStyle} onPress={() => this.pressLogout()}>
          Logout
        </ButtonSecondary>

      </Container>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#EA5442',
    borderColor: '#F7C4BC'
  },
  contentStyle: {
    height: '100%',
    width: '100%'
  },
  logoViewStyle: {
    alignItems: 'center',
    marginVertical: 10
  },
  //list
  listItemStyle: {
    borderColor: '#F7C4BC'
  },
  listItemText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  //profile
  profileSelectionStyle: {
   position: 'absolute',
   left: '2.5%',
   top: '70%',
   alignItems: 'center',
   width: '95%'
 },
  profileContainerButtonsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#fff',
    paddingVertical: 15
  },

  profileSelectionButtonStyle: {
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  iconStyle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FFF'
    },

  logoutButtonStyle: {
    position: 'absolute',
    left: '2.5%',
    top: '90%',
    width: '95%'
  },
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.id,
    user: state.auth.user,
    isBusinessOwner: state.auth.isBusinessOwner
  };
};

export default connect(mapStateToProps, {
  logout,
  businessOwnerSelected,
  customerSelected
})(SideBar);
