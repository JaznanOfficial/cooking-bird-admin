import React from 'react';
import HomeRight from './HomeRight';
import SideDrawer from './SideDrawer';

const Home = () => {
    
    return (
        <div className='flex '>
            <SideDrawer />
            <HomeRight />
        </div>
    );
};

export default Home;