import React, { useState, useEffect } from 'react';

export const GetCountriesAll = (search) => {

    const [data, setData] = React.useState([]);

    useEffect(() => {
        let API_URL = 'https://restcountries.eu/rest/v2/all'
        if (search) API_URL =  `https://restcountries.eu/rest/v2/name/${search}` 
        // console.log("🚀 ~ file: getCountriesAll.js ~ line 17 ~ useEffect ~ API_URL", API_URL)
        fetch(API_URL)
        .then((resp) => resp.json())
        .then((response) => {
            setData(response)
        })
        return data
    }, [search])
    return data

}
