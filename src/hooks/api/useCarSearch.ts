import { useState, useEffect } from 'react';

export const useCarSearch = (make, type, year) => {

    const [cars, setCars] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({make, type, year});

    const baseUrl = 'https://vpic.nhtsa.dot.gov/api'

    useEffect(() => {
        setCars([]);
        const fetchData = async () => {
            try {
                console.log('searchParam', searchParams)
                
                if(searchParams.make && !searchParams.year && !searchParams.type) {
                    const rawData = await fetch(`${baseUrl}/vehicles/GetModelsForMake/${searchParams.make}?format=json`);
                    const resp = await rawData.json();
                    setCars(resp.Results);
                    setAmountResults(resp.Count);
                } else if (searchParams.make && !searchParams.year && searchParams.type) {
                    const rawData = await fetch(`${baseUrl}/vehicles/getmodelsformakeyear/make/
                            ${searchParams.make}/vehicleType/${searchParams.type}?format=json`);
                        const resp = await rawData.json();
                    setCars(resp.Results);
                    setAmountResults(resp.Count);
                } else if (searchParams.make && searchParams.year && !searchParams.type) {
                    const rawData = await fetch(`${baseUrl}/vehicles/getmodelsformakeyear/make/
                            ${searchParams.make}/modelYear/${searchParams.year}?format=json`);
                        const resp = await rawData.json();
                    setCars(resp.Results);
                    setAmountResults(resp.Count);
                } else if (searchParams.make && searchParams.year && searchParams.type) {
                    const rawData = await fetch(`${baseUrl}/vehicles/getmodelsformakeyear/make/
                            ${searchParams.make}/modelYear/${searchParams.year}//vehicleType/${searchParams.type}?format=json`);
                    const resp = await rawData.json();
                    setCars(resp.Results);
                    setAmountResults(resp.Count);
                }
                
            } catch(e) {
                console.error(e);
            }
        }
        fetchData();
    }, [searchParams]);

    return [cars, amountResults, searchParams, setSearchParams] as const;

}