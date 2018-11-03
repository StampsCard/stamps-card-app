import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Logo, ButtonSecondary } from '.';
import { businessOwnerSelected, customerSelected, logout } from '../../actions';
import GetRoutesForSideBar from '../../services/GetRoutesForSideBar';

class SideBar extends React.Component {

  pressBusinessOwnerButton() {
    this.props.businessOwnerSelected(this.props.userId);
  }

  pressCustomerButton() {
    this.props.customerSelected(true);
  }

  render() {
    const {
      containerStyle,
      contentStyle,
      logoViewStyle,
      listItemText,
      listItemStyle,
      loginButtonStyle,
      profileSelectionStyle,
      profileSelectionButtonStyle,
      profileTextButtonStyle
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

        <View style={profileSelectionStyle}>
            <ButtonSecondary
              onPress={this.pressCustomerButton.bind(this)}
              style={profileSelectionButtonStyle}
            >
                <Text style={profileTextButtonStyle}>C</Text>
            </ButtonSecondary>
            <ButtonSecondary
              onPress={this.pressBusinessOwnerButton.bind(this)}
              style={profileSelectionButtonStyle}
            >
                <Text style={profileTextButtonStyle}>B</Text>
            </ButtonSecondary>
        </View>

        <ButtonSecondary style={loginButtonStyle} onPress={() => this.props.logout()}>
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
  listItemStyle: {
    borderColor: '#F7C4BC'
  },
  listItemText: {
    color: '#fff',
    fontWeight: 'bold'
  },
 profileSelectionStyle: {
   position: 'absolute',
   left: '2.5%',
   top: '75%',
   width: '95%',
   flexDirection: 'row',
   alignItems: 'center'
 },
 profileSelectionButtonStyle: {
   borderWidth: 2,
   borderRadius: 25,
   height: 40,
   width: 40,
   marginHorizontal: '5%',
   justifyContent: 'center',
   alignItems: 'center',
   flex: 1
 },

  loginButtonStyle: {
    position: 'absolute',
    left: '2.5%',
    top: '90%',
    width: '95%'
  },
  profileTextButtonStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.id
  };
};

export default connect(mapStateToProps, {
  logout,
  businessOwnerSelected,
  customerSelected
})(SideBar);
