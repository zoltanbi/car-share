import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import useReactRouter from 'use-react-router';
import { SearchResultsSummary } from '../../components/SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { useCarSearch } from '../../hooks/api/useCarSearch';

export const SearchPage = () => {

    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const makeParam = params.get('make');
    const typeParam = params.get('type');
    const yearParam = params.get('year');
    const [cars, amountResults, searchParams, performSearch] = useCarSearch(makeParam, typeParam, yearParam);

    if (!makeParam) {
        history.push('/');
    }

    const search = (make, type, year) => {
        const urlEncodedMake = encodeURI(make);
        const urlEncodedType = encodeURI(type);
        const urlEncodedYear = encodeURI(year);
        if(year==='') {
            if (type==='') {
                history.push(`/search?make=${urlEncodedMake}`);
            } else {
                history.push(`/search?make=${urlEncodedMake}&type=${urlEncodedType}`);
            }
        } else {
            history.push(`/search?make=${urlEncodedMake}&type=${urlEncodedType}&year=${urlEncodedYear}`);
        }
        performSearch({make, type, year});
    }

    return (
        <div>
            <Navbar make={makeParam} type={typeParam} year={yearParam} search={search}/>
            <SearchResultsSummary/>
            <SearchResults cars ={cars}/>
            
        </div>
    );
}