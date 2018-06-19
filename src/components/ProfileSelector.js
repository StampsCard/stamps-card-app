import React from 'react';
import { Container, Content, H1, H2 } from 'native-base';
import { View } from 'react-native';
import { LoginHeader } from "./login";
import { Button } from "./common";

class ProfileSelector extends React.Component {
  render() {

    const { profileContainerStyle, flexStyle, boxStyle, h1Style, h2Style } = styles;

    return (
      <Container>
          <LoginHeader />
          <Content style={{alignItems: 'center'}}>
            <H1 style={h1Style}>Who are you?</H1>
            <View style={flexStyle}>
                <View style={profileContainerStyle}>
                    <Button style={boxStyle}>
                        C
                    </Button>
                    <H2 style={h2Style}>I'm a customer</H2>
                </View>
                <View style={profileContainerStyle}>
                    <Button style={boxStyle}>
                        B
                    </Button>
                    <H2 style={h2Style}>I'm a business owner</H2>
                </View>
            </View>
          </Content>
      </Container>
    );
  }
}

const styles = {
  flexStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    padding: '10%'
  },

   h1Style: {
    color: '#80ADD3',
    marginVertical: 10,
    width:'100%'
   },

    h2Style: {
        color: '#80ADD3',
        marginVertical: 10
    },

  profileContainerStyle: {
      width: '50%'
  },


   boxStyle: {
     backgroundColor: '#EA5442',
     width: 80,
     height: 80,
     color: '#FFF'
   }
};

export default ProfileSelector;
