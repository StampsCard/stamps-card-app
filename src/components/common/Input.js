import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEnty }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEnty}
          placeholder={placeholder}
          autoCorrect={false}
          autoCapitalize='none'
          value={value}
          style={inputStyle}
          onChangeText={onChangeText}
        />
      </View>
  );
};

const styles = {
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2,
      width: 100,
      height: 20
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
};

export { Input };
