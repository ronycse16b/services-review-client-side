import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const ProtectRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);

if(loading)
{
 return <p>loading ....</p>;
}

if(!user){
    return <Navigate to='/login'></Navigate>
}
    
return children;
};

export default ProtectRoutes;