import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/ContactUs';
import Home from './components/Home';

const Routes = props => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;