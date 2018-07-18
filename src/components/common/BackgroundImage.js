import React from 'react';
import { Image } from 'react-native';
import GenerateImageService from '../../services/GetRandomBackgroundImage';

const BackgroundImage = () => {
  const image = GenerateImageService.random();
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
      source={image}
    />
  );
};

export { BackgroundImage };
