import Main from "../Layouts/Main";

import { createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Recipe/Recipes";
import Login from "../components/Login/Login";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";

const router =createBrowserRouter([
    {
        path:'/login',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            }
        ]

    },
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/recipes',
                element:<Recipes></Recipes>,
                loader:()=>fetch('http://localhost:5000/recipes')
            },
            {
               
            }
        ]
      
    },
  
])
export default router