import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const ButtonSecondary = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#5C9CCB',
    borderWidth: 2,
    borderColor: '#80ADD3',
    borderRadius: 15
  }
};

export { ButtonSecondary };
