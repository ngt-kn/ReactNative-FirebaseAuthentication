import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1, // Border around card
        borderRadius: 2, // corner radius
        borderColor: '#ddd',
        borderBottomWidth: 0, // No border at bottom
        shadowColor: '000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2, // Corner of shadow
        elevation: 1,
        marginLeft: 5,
        marignRight: 5,
        marginTop: 10
    }
};

export { Card };
