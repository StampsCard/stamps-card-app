import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Container, Content, H2, Button } from 'native-base';
import { BackgroundImage, SimpleHeader, Title } from './common';
import { businessOwnerSelected, customerSelected, changeBackground } from '../actions';

class ProfileSelector extends React.Component {
  componentWillMount() {
    this.props.changeBackground();
  }

  pressBusinessOwnerButton() {
    this.props.businessOwnerSelected(this.props.userLogged);
  }

  pressCustomerButton() {
    this.props.customerSelected(this.props.userLogged);
  }
  
  render() {
    const {
      containerButtonStyle,
      buttonStyle,
      textButtonStyle,
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
                    <Text style={textButtonStyle}>C</Text>
                </Button>
                <Button
                  style={buttonStyle}
                  onPress={this.pressBusinessOwnerButton.bind(this)}
                >
                    <Text style={textButtonStyle}>B</Text>
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

   textButtonStyle: {
     fontSize: 80,
     fontWeight: 'bold',
     color: '#FFF'
   }
};

const mapStateToProps = state => {
  return {
    user: state.profile.user,
    profile: state.profile.profile,
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
