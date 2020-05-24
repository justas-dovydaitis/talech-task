import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/products" />
            </Route>
            <Route path="/products"></Route>
            <Route path="/products/saved"></Route>
            <Route path="/products/create"></Route>
            <Route path="/products/:id"></Route>
            <Route path="/products/:id/edit"></Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
};

export default Routes;
