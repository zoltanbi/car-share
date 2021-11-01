import React from 'react';
import styles from './SearchResult.module.css'

export const SearchResult = (props) => {

    return (
        <div className={`card ${styles['search-result']}`}>
            <img className={styles['car-image']} src='https://via.placeholder.com/210' alt='car'/>
            <h2 className="subtitle">{props.car.Make_Name} {props.car.Model_Name}</h2>
        </div>
    )
}