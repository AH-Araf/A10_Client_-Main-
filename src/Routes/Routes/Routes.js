import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            }
        ]
    },
    {path: '*', element: <div><h1>404 Not Found Your Data</h1></div>}
])