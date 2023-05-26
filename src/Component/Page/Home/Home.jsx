import React from 'react';

import Banner from '../../Shared/Navbar/Banner/Banner';
import ShopCollection from '../../Section/ShopCollection/ShopCollection';
import BestSellers from '../../Section/ShopCollection/BestSellers/BestSellers';
import NewProducts from '../../Section/NewProducts/NewProducts';

const Home = () => {
    return (
        <div >
       
           <Banner></Banner>
            <ShopCollection></ShopCollection>
            <BestSellers></BestSellers>
            <NewProducts></NewProducts>
    
        </div>
    );
};

export default Home;
// className='relative w-full h-[500px] left-0 top-0'