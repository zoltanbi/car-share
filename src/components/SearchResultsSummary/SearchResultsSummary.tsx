import React from 'react';
import styles from './SearchResultsSummary.module.css';

export const SearchResultsSummary = (props) => {

    let resultStats = <p>Showing 5 results</p>;
    
    return (
        <div className={styles.container}>
            <h1 className={`subtitle ${styles.summary}`}><strong>Mercedes</strong> Truck</h1>
            <div>
                {resultStats}
            </div>
        </div>
    )
}