import React from 'react';
import Slider from '../../Slider/Slider';
import Banner from '../../Shared/Navbar/Banner/Banner';
import ShopCollection from '../../Section/ShopCollection/ShopCollection';
import ItemsHome from '../../ShopItems/ItemsHome'; 

const Home = () => {
    return (
        <div >
       
            <Banner/>
            <ShopCollection/>
            <ItemsHome/>
            
    
        </div>
    );
};

export default Home;
// className='relative w-full h-[500px] left-0 top-0'