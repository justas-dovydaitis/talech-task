import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes />
            <Footer />
        </Router>
    );
};

export default App;
