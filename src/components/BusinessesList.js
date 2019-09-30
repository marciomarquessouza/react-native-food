import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import BusinessesDetail from './BusinessesDetail';

const BusinessesList = ({ title, businesses, navigation }) => {

    if (!businesses.length) {
        return null;
    }

    return (
        <View style = { styles.container }>
            <Text style = { styles.titleStyle }>{ title } ({ businesses.length })</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = { false }
                data = { businesses }
                keyExtractor = { (business) => business.id }
                renderItem = { ({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress = { () => navigation.navigate('Business', { id: item.id })}
                        >
                            <BusinessesDetail business = { item } />
                        </TouchableOpacity>
                        );
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

export default withNavigation(BusinessesList);
