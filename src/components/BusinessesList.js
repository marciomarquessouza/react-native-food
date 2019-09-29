import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BusinessesDetail from './BusinessesDetail';

const BusinessesList = ({ title, businesses }) => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.titleStyle }>{ title } ({ businesses.length })</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = { false }
                data = { businesses }
                keyExtractor = { (business) => business.id }
                renderItem = { ({ item }) => {
                    return (<BusinessesDetail business = { item } />);
                } } 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default BusinessesList;
