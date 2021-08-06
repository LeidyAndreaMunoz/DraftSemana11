import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from '../components/marvel/HomePage';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { ContactoScreen } from '../components/contacto/ContactoScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { AboutScreen } from '../components/aboutUs/aboutUs';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div  className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ HomePage } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/contacto" component={ ContactoScreen } />
                    <Route exact path="/registro" component={ RegisterScreen } />
                    <Route exact path="/about" component={ AboutScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>


        </>
    )
}
