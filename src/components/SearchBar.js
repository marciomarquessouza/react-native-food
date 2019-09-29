import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={ styles.backgroundStyle }>
            <Feather style = { styles.iconStyle } name="search" color="black" />
            <TextInput style = { styles.inputStyle } placeholder="Search"/>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;
