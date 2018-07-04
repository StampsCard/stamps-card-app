import React from 'react';
import { Label } from 'native-base';
import { FormInput, FormItem } from '.';

const InputWithLabel = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { labelStyle } = styles;
  return (
        <FormItem>
          <Label style={labelStyle}>{label}</Label>
          <FormInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
          />
        </FormItem>

  );
};

const styles = {
    labelStyle: {
        margin: 3,
        color: '#80ADD3',
        fontWeight: 'bold'
        // placeholderTextColor: '#FFF',
    }
};

export { InputWithLabel };
