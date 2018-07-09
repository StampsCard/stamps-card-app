import React from 'react';
import { Header, Left, Body, Right, Button, Text, Icon } from 'native-base';

const HeaderDetail = ({ title, onPressBack }) => {
  const { headerStyle, titleStyle } = styles;

  return (
    <Header style={headerStyle}>
      <Left />
      <Body>
        <Text style={titleStyle}>{title}</Text>
      </Body>
      <Right>
        <Button
          transparent
          onPress={onPressBack}
        >
          <Icon name="ios-arrow-dropleft" />
        </Button>
      </Right>
    </Header>
  );
};

const styles = {
    titleStyle: {
      color: '#fff'
    },

    headerStyle: {
      backgroundColor: '#EA5442'
    }
};

export { HeaderDetail };
