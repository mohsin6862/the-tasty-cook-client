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
import PrivateRoute from "../PrivateRoute";
import Blog from "../components/Blog/Blog";
import BlogLayout from "../Layouts/BlogLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to='/recipes'></Navigate>

            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terrms></Terrms>
            },

        ]

    },
    {
        path: '/',
        element: <Main></Main>,

        children: [

            {
                path: '/recipes',
                element: <Recipes></Recipes>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: () => fetch('https://chef-recipe-hunter-server-site-mohsin6862.vercel.app/recipes')
            },

        ]

    },
    {
        path: '/',
        element: <SingleRecipe></SingleRecipe>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [


            {
                path: 'recipes/:id',
                element: <PrivateRoute><AllRecipe></AllRecipe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-site-mohsin6862.vercel.app/recipes/${params.id}`)
            }

        ]
    },
    {
        path: '/',
        element: <BlogLayout></BlogLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/blog',
                element: <Blog></Blog>

            }
        ]
    }

])
export default router