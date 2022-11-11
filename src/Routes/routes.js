import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Service from "../pages/Service/Service";
import ServiceDetails from "../pages/Service/ServiceDetails";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Service></Service>,
            loader: async() =>{
                return fetch("http://localhost:5000/services");
            }
        },
        
        {
            path: `/services/details/:id`,
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params}) =>{
                return fetch(`http://localhost:5000/services/${params.id}`);
            }
        },
        {
            path: `/login`,
            element: <Login></Login>,
           
        },
        
        {
            path: `/register`,
            element: <Register></Register>,
           
        },
        
      ]
    }
  ]);

  export default router;