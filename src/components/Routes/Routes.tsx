import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import Page from '../Page/Page';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/products" />
            </Route>
            <Route path="/products">
                <Page title="Products" metaDescription="Meta for products" heading="Products"></Page>
            </Route>
            <Route path="/products/saved">
                <Page title="Saved products" metaDescription="Meta for saved products" heading="Saved products"></Page>
            </Route>
            <Route path="/products/create">
                <Page
                    title="New product"
                    metaDescription="Meta for new product creation"
                    heading="Create a product"
                ></Page>
            </Route>
            <Route path="/products/:id">
                <Page
                    title="Product overview"
                    metaDescription="Meta for new product overview"
                    heading="Product overview"
                ></Page>
            </Route>
            <Route path="/products/:id/edit">
                <Page
                    title="Edit product"
                    metaDescription="Meta for new product edit page"
                    heading="Edit product"
                ></Page>
            </Route>
            <Route>
                <Page title="Page not found" metaDescription="There is no page at this url" heading="Not found">
                    <NotFound />
                </Page>
            </Route>
        </Switch>
    );
};

export default Routes;
