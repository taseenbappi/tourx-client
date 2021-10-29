import React from 'react';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import TourPackage from '../TourPackage/TourPackage';


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <TourPackage></TourPackage>
            <Advantages></Advantages>
            <Contact></Contact>
        </div>
    );
};

export default Home;