import React, {useState} from 'react'


export const Search = (props) => {
    const {search, setSearch} = props


    // const handleChange = () => {

    // }

    const getData = async (e) => {
        e.preventDefault();
        console.log('search', search);
        await fetch(`https://restcountries.eu/rest/v2/name/${search}`)
        .then((resp) => resp.json())
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.log('xd');
        console.error(error);
        });
    }

    return (
        <form onSubmit={ getData }>
            <input 
                type="text"
                placeholder="Find your hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={search}
                onChange={ (e) => setSearch(e.target.value) }
            />

            <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary"
            >
                Search...
            </button>
        </form>
    )
} 
