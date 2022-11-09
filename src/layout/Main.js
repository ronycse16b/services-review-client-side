import React from 'react';
import Navber from '../pages/Shared/Navber/Navber';
import Topber from '../pages/Shared/Topber/Topber';
import {Outlet} from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Topber></Topber>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;