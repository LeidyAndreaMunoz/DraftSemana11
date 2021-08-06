import React, {useState, useEffect} from 'react'
import { HeroList } from '../heroes/HeroList'
import  { GetCountriesAll }  from '../../selectors/getCountriesAll';
import { Search } from './Search'
import './countries.css'

 const MarvelScreen = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getData = (search) => {
        setLoading(true)
        let API_URL = 'https://restcountries.eu/rest/v2/all'
        if (search) API_URL =  `https://restcountries.eu/rest/v2/name/${search}` 
        // console.log("🚀 ~ file: getCountriesAll.js ~ line 17 ~ useEffect ~ API_URL", API_URL)
        fetch(API_URL)
        .then((resp) => resp.json())
        .then((response) => {
            console.log('response', response);
            setData(response)
            setLoading(false)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Busqueda de Paises </h1>
            <Search getData={getData}/>
            <hr />
            {!loading ? <HeroList data={data}/> : 
                <h1 className="loading">Cargando...</h1>
            }
   
        </div>
    )
}


export default MarvelScreen