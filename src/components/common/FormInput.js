import React from 'react';
import { Input } from 'native-base';

const FormInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle } = styles;
  return (
        <Input
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          autoCapitalize='none'
          value={value}
          style={inputStyle}
          onChangeText={onChangeText}
        />
  );
};

const styles = {
    inputStyle: {
        backgroundColor: '#5C9CCB',
        borderColor: '#80ADD3',
        borderWidth: 2,
        borderRadius: 15,
        color: '#FFF',
        // placeholderTextColor: '#FFF',
    }
};

export { FormInput };
