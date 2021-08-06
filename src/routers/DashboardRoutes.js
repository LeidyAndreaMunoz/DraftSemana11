import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import  MarvelScreen  from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import  TableResult  from '../components/TableResult/TableResult';
import { ContactoScreen } from '../components/contacto/ContactoScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/country/:name" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ TableResult } />
                    <Route exact path="/contacto" component={ ContactoScreen } />
                    <Route exact path="/registro" component={ RegisterScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>


        </>
    )
}
