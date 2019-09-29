import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import BusinessesList from '../components/BusinessesList';
import SearchBar from '../components/SearchBar';
import useBusiness from '../hooks/useBusinesses';

const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [businesses, fetchBusinesses, errorMessage] = useBusiness();

    const filterBusinessByPrice = (price, businessesSource) => {
        return businessesSource.filter((business) => {
            return business.price === price
        });
    };

    return (
        <>
            <SearchBar
                term = { term }
                onTermChange = { setTerm }
                onTermSubmited = { () => fetchBusinesses(term) }
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <ScrollView>
                <BusinessesList 
                    title="Cost Effective" 
                    businesses = { filterBusinessByPrice('$$', businesses) }
                />
                <BusinessesList
                    title="Bit Pricer"
                    businesses = { filterBusinessByPrice('$', businesses) }
                />
                <BusinessesList
                    title="Big Spender"
                    businesses = { filterBusinessByPrice('$$$', businesses) }
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
