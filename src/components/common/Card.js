import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginRight: 5,
    marginTop: 10,
    marginLeft: 5
  }
};

export { Card };
