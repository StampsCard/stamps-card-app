import React from 'react';
import { View } from 'react-native';
import { Logo } from '../common';

const SimpleHeader = ({ style }) => {
    return (
        <View style={[styles.headerStyle, style]}>
            <Logo />
        </View>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: 'transparent',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        borderWidth: 0,
        width: '100%',
        alignItems: 'center'
    }
};

export { SimpleHeader };
