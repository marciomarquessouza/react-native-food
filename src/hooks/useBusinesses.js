import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchBusinesses = async (searchTerm) => {
        try {
            const results = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'São Paulo'
                }
            });
            setBusinesses(results.data.businesses);
        } catch (error) {
            setErrorMessage('Oh oh, something went wrong')
        }
    };

    useEffect(() => {
        fetchBusinesses('lanche');
    }, []);

    return [businesses, fetchBusinesses, errorMessage];
};
