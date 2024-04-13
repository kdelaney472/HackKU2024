//Google scraping

import React, {useState, useEffect, useContext} from "react";

export const ContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    const getResults = async (url) => {
        setLoading(true);

        const response = await fetch(`https://google-search3.p.rapidapi.com/api/v1${url}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        },
        });

        const data = await response.json();
        setResults(data);
        setLoading(false);
        
    };

    return(
        <ContextProvider value={{getResults, loading, results, query ,setQuery}}>
            {children}
        </ContextProvider>
    );
};

export const useStateContext = () => useContext(ContextProvider);
