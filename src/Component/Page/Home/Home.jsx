import React from 'react';

import Banner from '../../Shared/Navbar/Banner/Banner';
import ShopCollection from '../../Section/ShopCollection/ShopCollection';
import BestSellers from '../../Section/ShopCollection/BestSellers/BestSellers';


const Home = () => {
    return (
        <div >
       
           <Banner></Banner>
<ShopCollection></ShopCollection>
            <BestSellers></BestSellers>
         
        </div>
    );
};

export default Home;
// className='relative w-full h-[500px] left-0 top-0'