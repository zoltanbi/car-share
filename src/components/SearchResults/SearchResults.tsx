import React from 'react';
import styles from './SearchResults.module.css'
import { SearchResult } from '../SearchResult/SearchResult';

export const SearchResults = (props) => {

    const searchResults = props.cars.map(car => <SearchResult key={car.Make_ID + car.Model_ID} car={car}/>)

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    )
}