import React from 'react';
import styles from './SearchResults.module.css'
import { SearchResult } from '../SearchResult/SearchResult';

export const SearchResults = () => {

    return (
        <div className={styles['search-results']}>
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
        </div>
    )
}