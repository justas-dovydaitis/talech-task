import React from 'react';
import { Helmet } from 'react-helmet';

import './Page.scss';

interface IPageProps {
    heading: string;
    title: string;
    metaDescription: string;
}

const Page: React.FC<IPageProps> = ({ title, metaDescription, heading, children }) => {
    return (
        <section className="page">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            <h1 className="page__heading">{heading}</h1>
            {children}
        </section>
    );
};

export default Page;
