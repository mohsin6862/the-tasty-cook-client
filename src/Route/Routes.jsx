import Main from "../Layouts/Main";

import { Navigate, createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Recipe/Recipes";
import Login from "../components/Login/Login";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import Register from "../components/Registration/Register";
import Terrms from "../components/TermsAndConditions/Terrms";
import RightNav from "../components/RightNav/RightNav";
import AllRecipe from "../components/Allrecipe/AllRecipe";
import SingleRecipe from "../Layouts/LoginLayout/SingleRecipe";

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
         
        ]
      
    },
    {
        path:'/',
        element:<SingleRecipe></SingleRecipe>,
        children:[
       

            {
                path:'recipes/:id',
                element:<AllRecipe></AllRecipe>,
               loader:({params})=>fetch(`http://localhost:5000/recipes/${params.id}`)
            }
          
        ]
    }
  
])
export default router