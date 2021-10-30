import React from 'react';
import styles from './LandingPage.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const LandingPage = () => {
    return (
        <div className={styles['landing']}>
            <h1 className="title is-1">Browse Car SHA<span style={{color: '#A3CD39'}}>i</span>R</h1>
            <SearchBar/>
        </div>
    );
}