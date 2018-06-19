import React from 'react';
import { Header, Body, Left, Right } from 'native-base';
import { Logo } from '../common';

const LoginHeader = () => {
    return (
        <Header style={styles.headerStyle}>
            <Left />
            <Body style={styles.bodyStyle}>
                <Logo />
            </Body>
            <Right />
        </Header>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: 'transparent',
        height: 100,
        paddingTop: 40,
        justifyContent: 'space-between',
        borderBottomWidth: 0
    },

    bodyStyle: {
        alignItems: 'center'
    }
};

export { LoginHeader };
