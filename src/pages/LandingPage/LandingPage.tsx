import React from 'react';
import styles from './LandingPage.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import useReactRouter from 'use-react-router';

export const LandingPage = () => {

    const {history} = useReactRouter();
    
    function search(make, type, year) {
        const urlEncodedMake = encodeURI(make);
        const urlEncodedType = encodeURI(type);
        const urlEncodedYear = encodeURI(year);
        if(year==='') {
            history.push(`/search?make=${urlEncodedMake}&type=${urlEncodedType}`);
        } else {
            history.push(`/search?make=${urlEncodedMake}&type=${urlEncodedType}&year=${urlEncodedYear}`);
        }
        console.log('year:', year)
    }

    return (
        <div className={styles.landing}>
            <h1 className="title is-1">Browse Car SHA<span style={{color: '#A3CD39'}}>i</span>R</h1>
            <SearchBar search={search}/>
        </div>
    );
}