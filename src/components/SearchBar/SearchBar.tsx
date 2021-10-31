import React, { useState } from 'react';
import { YearSlider } from '../YearSlider/YearSlider';
import styles from './SearchBar.module.css'

interface SearchBarProp {
    small?: string,
    make?: string,
    type?: string,
    year?: string
    search?: any;
}

export const SearchBar = (props: SearchBarProp) => {

    const [make, setMake] = useState(props.make || '');
    const [type, setType] = useState(props.type || '');
    const [year, setYear] = useState(props.year || '');

    // for toggling year slider
    const [anyYear, setAnyYear] = useState(true);

    const sizeClass = props.small ? '' : 'is-medium';

    const toggleYear = (e) => {
        setAnyYear(!anyYear);
        console.log(e.target.value);
        if(e.target.checked) {
            setYear('');
        }
    }

    const displayYearSlider = anyYear ? '' : <YearSlider min={1970} max={2020} value={2000} setYear={setYear}/>;

    const submit = (e) => {
        if(typeof props.search === 'function') {
            props.search(make, type, year);
        }
        console.log(make, type, year);
        e.preventDefault();
    }


    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <span className="control">
                    <div className={`button is-static ${sizeClass}`}>Car Make</div>
                </span>
                <span className="control">
                    <input 
                        className={`input ${sizeClass} ${styles[`input-control`]}`} 
                        type="text" 
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        placeholder="Mercedes, Honda, Ford, ..."
                    />
                </span>
                <span className="control">
                <div className={`button is-static ${sizeClass}`}>TYPE</div>
                </span>
                <span className="control">
                    <input 
                        className={`input ${sizeClass} ${styles[`input-control`]}`} 
                        type="text" 
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Car, Truck, Trailer, ..."
                    />
                </span>
                <button className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span>
                </button>
            </div>
            <div className={styles.year}>
                <div className={`field ${styles['year-switch']}`}>
                    <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" className="switch is-rounded" onChange={toggleYear} checked={anyYear}/>
                    <label htmlFor="switchRoundedDefault">Search any year</label>
                </div>
                {displayYearSlider}
            </div>
        </form>
    )
}