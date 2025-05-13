import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Dashboard from "../Layouts/Dashboard";

const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<p>error occured</p>,
        element:<Layout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]
    }
])

export default router;