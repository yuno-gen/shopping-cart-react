import React from 'react';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/product" element={<ProductDetails />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;