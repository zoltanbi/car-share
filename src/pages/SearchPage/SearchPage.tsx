import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import useReactRouter from 'use-react-router';
import { SearchResultsSummary } from '../../components/SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import styles from './SearchPage.module.css'

export const SearchPage = () => {

    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const makeParam = params.get('make');
    const typeParam = params.get('type');
    const yearParam = params.get('year');

    if (!makeParam) {
        history.push('/');
    }

    return (
        <div>
            <Navbar make={makeParam} type={typeParam} year={yearParam}/>
            <SearchResultsSummary/>
            <SearchResults/>
            
        </div>
    );
}