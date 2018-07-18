import React from 'react';
import { Image } from 'react-native';

const BackgroundImage = ({ image }) => {
  const sourceImage = (image) || require('../../../resources/img/background-1-min.jpg');

  return (
    <Image
      style={{
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.15,
        zIndex: -1
      }}
      source={sourceImage}
    />
  );
};

export { BackgroundImage };
