import React, { useState } from 'react';
import { YearSlider } from '../YearSlider/YearSlider';
import styles from './SearchBar.module.css'

interface SearchBarProp {
    small?: string,
}

export const SearchBar = (props: SearchBarProp) => {

    const [anyYear, setAnyYear] = useState(true);

    const sizeClass = props.small ? '' : 'is-medium';

    const toggleYear = () => {
        setAnyYear(!anyYear);
    }

    const displayYearSlider = anyYear ? '' : <YearSlider min={1970} max={2020} value={2000}/>;


    return (
        <form>
            <div className="field has-addons">
                <span className="control">
                    <div className={`button is-static ${sizeClass}`}>Car Make</div>
                </span>
                <span className="control">
                    <input 
                        className={`input ${sizeClass} ${styles[`input-control`]}`} 
                        type="text" 
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
                        placeholder="Car, Truck, Trailer, ..."
                    />
                </span>
                <button className={`button ${sizeClass} ${styles['search-button']}`}>
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