import React from 'react';
import { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const ProtectRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();


if(loading)
{
 return <p>Loading ....</p>;
}

if(user&& user.uid){
    return children;
}
return <Navigate to='/login' state={{from:location}} replace   ></Navigate>

};

export default ProtectRoutes;