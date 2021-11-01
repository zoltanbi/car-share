import React from 'react';
import styles from './SearchResultsSummary.module.css';

export const SearchResultsSummary = (props) => {

    let resultStats = <p>No results found.</p>;
    if(props.amountResults) {
        resultStats = <p>Showing {props.amountResults} results</p>;
    }
    
    return (
        <div className={styles.container}>
            <h1 className={`subtitle ${styles.summary}`}><strong>{props.make}</strong> {props.type}</h1>
            <div>
                {resultStats}
            </div>
        </div>
    )
}