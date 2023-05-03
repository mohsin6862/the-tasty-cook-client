import Main from "../Layouts/Main";

import { Navigate, createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Recipe/Recipes";
import Login from "../components/Login/Login";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import Register from "../components/Registration/Register";
import Terrms from "../components/TermsAndConditions/Terrms";
import RightNav from "../components/RightNav/RightNav";

const router =createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to='/recipes'></Navigate>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terrms></Terrms>
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
                path:'/apply',
                element:<RightNav></RightNav>,
              
               
            }
        ]
      
    },
  
])
export default router