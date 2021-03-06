import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, BackHandler, Alert } from 'react-native';

import { Container, Content, H2, Button, Icon } from 'native-base';
import { BackgroundImage, SimpleHeader, Title } from './common';
import { businessOwnerSelected, customerSelected, changeBackground } from '../actions';

class ProfileSelector extends React.Component {

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.props.changeBackground();
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress() {
    Alert.alert(
      'Logout',
      'Are you sure do you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => Actions.login() },
      ]
    );

    return true;
  }

  pressBusinessOwnerButton() {
    this.props.businessOwnerSelected(this.props.user.id);
  }

  pressCustomerButton() {
    this.props.customerSelected(true);
  }

  render() {
    const {
      containerButtonStyle,
      buttonStyle,
      iconStyle,
      subTitleStyle
    } = styles;

    return (
      <Container>
          <BackgroundImage image={this.props.background} />
          <SimpleHeader />
          <Content contentContainerStyle={styles.contentContainer}>
            <Title>Who are you?</Title>
            <View style={containerButtonStyle}>
                <Button
                  style={buttonStyle}
                  onPress={this.pressCustomerButton.bind(this)}
                >
                  <Icon style={iconStyle} active name="cart" />
                </Button>
                <Button
                  style={buttonStyle}
                  onPress={this.pressBusinessOwnerButton.bind(this)}
                >
                  <Icon style={iconStyle} active name="cash" />
                </Button>
            </View>
            <View style={containerButtonStyle}>
                <H2 style={subTitleStyle}>Customer</H2>
                <H2 style={subTitleStyle}>Business Owner</H2>
            </View>
          </Content>
      </Container>
    );
  }
}

const styles = {

  subTitleStyle: {
      color: '#80ADD3',
      marginHorizontal: '5%',
      fontWeight: 'bold',
      height: 110,
      width: 110,
      marginTop: 15
  },

  containerButtonStyle: {
      width: '75%',
      flexDirection: 'row',
      marginHorizontal: '12.5%'
  },

  contentContainer: {
    alignItems: 'center',
  },

   buttonStyle: {
     backgroundColor: '#EA5442',
     borderWidth: 2,
     borderColor: '#F7C4BC',
     borderRadius: 25,
     height: 110,
     width: 110,
     marginHorizontal: '5%',
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1
   },

   iconStyle: {
     fontSize: 50
   }
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    profile: state.auth.profile,
    background: state.common.background
  };
};

export default connect(
  mapStateToProps,
  {
    businessOwnerSelected,
    customerSelected,
    changeBackground
 }
)(ProfileSelector);
