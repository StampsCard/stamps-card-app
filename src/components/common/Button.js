import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#EA5442',
    borderWidth: 2,
    borderColor: '#F7C4BC',
    borderRadius: 15
  }
};

export { Button };
