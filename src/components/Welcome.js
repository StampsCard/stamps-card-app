import React from 'react';
import { Container } from 'native-base';
import { Text } from 'react-native';
import { SimpleHeader } from './common';

class Welcome extends React.Component {
  render() {
    const { containerStyle, textStyle, headerStyle } = styles;
    return (
        <Container style={containerStyle}>
          <SimpleHeader style={headerStyle} />
          <Text style={textStyle}>{'welcome'.toUpperCase()}</Text>
          <Text style={textStyle}>{'to your'.toUpperCase()}</Text>
          <Text style={textStyle}>{'stamps card'.toUpperCase()}</Text>
          <Text style={textStyle}>{'for'.toUpperCase()}</Text>
        </Container>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#EA5442',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  headerStyle: {
    marginBottom: 40
  },
  textStyle: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold'
  }
};

export default Welcome;
