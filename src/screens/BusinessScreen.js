import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const BusinessScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [business, setBusiness] = useState(null);

    const getBusiness = async businessID => {
        try {
            const result = await yelp.get(`/${businessID}`);
            setBusiness(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBusiness(id);
    }, []);

    if (!business) {
        return null;
    }

    return (
        <View>
            <Text>{ business.name }</Text>
            <FlatList
                data = { business.photos }
                keyExtractor = { (photo) => photo}
                renderItem = { ({ item }) => {
                    return <Image style = { styles.imageStyle } source = { { uri: item }} />
                } }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
        margin: 10
    }
});

export default BusinessScreen;
