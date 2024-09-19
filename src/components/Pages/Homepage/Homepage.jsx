import React from 'react';
import Ready from './Ready';
import Banner from './Banner';
import Conversations from './Conversations';
import Communication from './Communication';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Communication />
            <Conversations />
            <Ready />
        </div>
    );
};

export default Homepage;