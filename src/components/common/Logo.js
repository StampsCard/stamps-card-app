import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
    return (
        <Image source={require('../../../resources/img/stamps_card_logo.png')} style={styles.logoStyle} />
    );
};

const styles = {
    logoStyle: {
        width: 45,
        height: 45
    }
};

export { Logo };