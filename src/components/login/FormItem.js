import React from 'react';
import { View } from 'react-native';

const FormItem = (props) => {
    return (
        <View style={styles.itemStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    itemStyle: {
        marginVertical: 10
    }
};

export { FormItem };