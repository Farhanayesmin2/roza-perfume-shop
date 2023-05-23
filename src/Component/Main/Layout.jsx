import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Layout></Layout>
        <Footer></Footer>
        </div>
    );
};

export default Layout;