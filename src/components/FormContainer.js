import React, { useState, useEffect, Fragment } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
const axios = require('axios').default;

const FormContainer = (props) => {
    const [search_term, setSearch_term] = useState('');
    const [number_of_results_required, setNumber_of_results_required] = useState(0);
    const [searchData, setSearchData] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const [inputLength, setInputLength] = useState(0);

    useEffect(() => {
        const endpoint = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${number_of_results_required}&solrTerm=${search_term}`;

        axios.get(endpoint)
            .then(response => response)
            .then(data => {
                const numFound = data.data.results.numFound;
                const docs = data.data.results.docs;
                setNumber_of_results_required(numFound);
                setSearchData(docs);
            })
            .catch((error) => {
                // handle error
                setFetchError(true);
            });

    }, [search_term, number_of_results_required]);

    const handleChange = (e) => {
        const inputVal = e.target.value;
        setInputLength(inputVal.length);
        setSearch_term(e.target.value);
    };

    return (
        <Fragment>
            <SearchForm searchTerm={search_term} handleChange={handleChange} />
            {!fetchError && inputLength >= 2 && <SearchResults searchData={searchData} />}
        </Fragment>
    );
}

export { FormContainer as default };