import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Logo, ButtonSecondary } from '.';
import { logout } from '../../actions';
import GetRoutesForSideBar from '../../services/GetRoutesForSideBar';

class SideBar extends React.Component {
  render() {
    const {
      containerStyle,
      logoViewStyle,
      listItemText,
      listItemStyle,
      buttonStyle
    } = styles;
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
          <ButtonSecondary style={buttonStyle} onPress={() => this.props.logout()}>
            Logout
          </ButtonSecondary>
        </Content>
      </Container>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#EA5442',
    borderColor: '#F7C4BC'
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

  buttonStyle: {
    margin: 5,
    marginTop: 30
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.id
  };
};

export default connect(mapStateToProps, { logout })(SideBar);
