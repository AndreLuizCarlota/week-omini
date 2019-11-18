import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import New from './screens/New';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/new" exact component={New} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}