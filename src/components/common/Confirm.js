import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from 'native-base';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

export { Confirm };
