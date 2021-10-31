import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


export const Navbar = (props) => {

    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><h1 className={`title is-1 ${styles.logo}`}>Car SHA<span style={{color: '#A3CD39'}}>i</span>R</h1></Link>
            <SearchBar small make={props.make} type={props.type} year={props.year} search={props.search}/>
            <div></div>
        </div>
    )
}