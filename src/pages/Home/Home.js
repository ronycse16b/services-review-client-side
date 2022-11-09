import React from 'react';
import Banner from '../Banner/Banner';
import BannerService from '../Banner_service/BannerService';
import Content from '../Content/Content';
import FaQ from '../F&Q/FaQ';


const Home = () => {
    return (
        <>
      
      <Banner></Banner>
      
      <BannerService></BannerService>
      <Content></Content>
      <FaQ></FaQ>
     
        
        </>
    );
};

export default Home;