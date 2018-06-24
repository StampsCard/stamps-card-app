import React from 'react';
import { Title as NativeTitle } from 'native-base';

const Title = ({ children }) => {
  return (
    <NativeTitle style={styles.titleStyle}>{children}</NativeTitle>
  );
};

const styles = {
   titleStyle: {
    color: '#80ADD3',
    marginVertical: 25,
    fontWeight: 'bold',
    fontSize: 30
   },
};

export { Title };
