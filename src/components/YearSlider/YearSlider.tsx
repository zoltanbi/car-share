import React, { useState, useEffect } from 'react';
import styles from './YearSlider.module.css'

interface YearSliderProp {
    value: number;
    min: number;
    max: number;
}

export const YearSlider = (props:YearSliderProp) => {

    const [value, setValue] = useState(props.value);
    const [cssValue, setCssValue] = useState((100 - ((props.max - value) / (props.max - props.min) * 100)).toString().concat('%'))
    
    const onSliderChange = (e) => {
        // set correct bar percent
        let percent = (100 - ((props.max - e.target.value) / (props.max - props.min) * 100)).toString().concat('%');
        setValue(e.target.value);
        setCssValue(percent); 
        document.documentElement.style.setProperty('--value', cssValue);
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--value', cssValue);
    }, [cssValue])

    return (
        <div className={styles['year-container']}>
            <div className={`button is-static is-small`}><strong> Select Year</strong></div>
            <input className={styles['year-slider']} min={props.min} max={props.max} onChange={onSliderChange} type="range"/>
            <output htmlFor="sliderWithValue">{value}</output>
        </div>
    )
}