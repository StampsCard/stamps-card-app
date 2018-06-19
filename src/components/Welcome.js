import React from 'react';
import { View, Text } from 'react-native';
import { SimpleHeader } from './common';

class Welcome extends React.Component {
  render() {
    return (
        <View>
          <SimpleHeader />
          <Text>
            Welcome to Stamp Cards
          </Text>
        </View>
    );
  }
}

export default Welcome;
