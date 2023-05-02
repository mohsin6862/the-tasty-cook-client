import Main from "../Layouts/Main";

import { createBrowserRouter } from "react-router-dom";
import Recipes from "../components/Recipe/Recipes";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/recipes',
                element:<Recipes></Recipes>,
                loader:()=>fetch('http://localhost:5000/recipes')
            }
        ]
      
    },
  
])
export default router