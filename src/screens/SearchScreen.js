import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [business, setBusiness] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchBusiness = async () => {
        try {
            const results = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'São Paulo'
                }
            });
            setBusiness(results.data.businesses);
        } catch (error) {
            setErrorMessage('Oh oh, something went wrong')
        }
    };

    return (
        <View>
            <SearchBar
                term = { term }
                onTermChange = { setTerm }
                onTermSubmited = { fetchBusiness }
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <Text>The search returned { business.length } results.</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
