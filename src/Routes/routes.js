import Main from "../layout/Main";
import AddServices from "../pages/Add Services/AddServices";
import Blog from "../pages/Blog/Blog";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import MyReview from "../pages/MyReview/MyReview";
import Service from "../pages/Service/Service";
import ServiceDetails from "../pages/Service/ServiceDetails";
import ProtectRoutes from "./ProtectRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      errorElement:<Errorpage></Errorpage>,
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
        {
            path: `/addservices`,
            element: <AddServices></AddServices>,
           
        },
        {
            path: `/blog`,
            element: <Blog></Blog>,
           
        },
        {
            path: `/reviews`,
            element: <ProtectRoutes><MyReview></MyReview>,</ProtectRoutes>
           
        },
        
      ]
    }
  ]);

  export default router;