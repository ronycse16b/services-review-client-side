import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";

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
        
      ]
    }
  ]);

  export default router;