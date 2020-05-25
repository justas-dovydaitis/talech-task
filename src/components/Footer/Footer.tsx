import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p className="footer__text">
                Copyright &copy; 2020&nbsp;
                <Link to="https://www.linkedin.com/in/justas-dovydaitis/" className="footer__link">
                    Justas Dovydaitis
                </Link>
                &nbsp;| TALECH WAREHOUSE
            </p>
        </footer>
    );
};

export default Footer;
