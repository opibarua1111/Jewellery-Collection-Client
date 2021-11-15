import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Explore;