import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

const Header: React.FC = () => {
    const [navExpanded, setNavExpanded] = useState<boolean>(false);

    return (
        <nav className="nav">
            <div className="nav__logo-area">
                <i
                    onClick={() => {
                        setNavExpanded(!navExpanded);
                    }}
                    className="fa fa-bars nav__menu-icon"
                />
                <Link to="/" className="nav__logo">
                    Talech warehouse
                </Link>
            </div>
            <ul className={`nav__list${navExpanded ? '--expanded' : ''}`}>
                <li onClick={() => setNavExpanded(false)} className="nav__item">
                    <NavLink exact to="/" className="nav__link" activeClassName="nav__link--active">
                        List
                    </NavLink>
                </li>
                <li onClick={() => setNavExpanded(false)} className="nav__item">
                    <NavLink exact to="/products" className="nav__link" activeClassName="nav__link--active">
                        Manage products
                    </NavLink>
                </li>
                <li onClick={() => setNavExpanded(false)} className="nav__item">
                    <NavLink exact to="/products/create" className="nav__link" activeClassName="nav__link--active">
                        Add product
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
