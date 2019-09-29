import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';

const BusinessesDetail = ({ business }) => {
    return (
        <View style = { styles.container }>
            <Image 
                style = { styles.imageStyle } 
                source = {
                    business.image_url
                    ? { uri: business.image_url }
                    : require('../../assets/baby-llama.png') }
            />
            <Text style = {styles.textNameStyle }>
                { business.name }
            </Text>
            <Text style = {styles.textSubStyle }>
                { business.rating } Stars, { business.review_count } Reviews 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    textNameStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textSubStyle: {
        fontSize: 14
    }
});

export default BusinessesDetail;
