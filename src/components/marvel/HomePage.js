import React, {useState} from 'react'
import { HeroList } from '../heroes/HeroList'
import { Search } from './Search'

export const HomePage = () => {

    
    const [search, setSearch] = useState('')

    return (
        <div>
            <h1>Marvel Screen</h1>
            <Search search={search} setSearch={setSearch}/>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
