import React from 'react';
import { Image } from 'react-native';

const BackgroundImage = () => {
    return (
      <Image
        style={{
          flex: 1,
          resizeMode: 'cover',
          backgroundColor: 'rgba(0,0,0,0.5)',
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.2
        }}
        source={require('../../../resources/img/login_background.jpg')}
      />
    );
};

export { BackgroundImage };
