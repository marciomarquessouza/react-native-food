import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusiness from '../hooks/useBusinesses';

const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [businesses, fetchBusinesses, errorMessage] = useBusiness();

    return (
        <View>
            <SearchBar
                term = { term }
                onTermChange = { setTerm }
                onTermSubmited = { () => fetchBusinesses(term) }
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <Text>The search returned { businesses.length } results.</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
