import React from 'react';

import Banner from './Banner';
import AboutUs from './AboutUs';
import Communication from './Communication';
import Conversations from './Conversations';


const Homepage = () => {
    return (
        <div>
            <Banner />
            <Communication />
            <Conversations/>
            <AboutUs/>
        </div>
    );
};

export default Homepage;