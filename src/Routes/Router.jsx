import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Dashboard from "../Layouts/Dashboard";
import Products from "../Layouts/Products/Products";
import AddProduct from "../Layouts/Products/AddProduct";
import Users from "../Layouts/Users/Users";
import AddUser from "../Layouts/Users/AddUser";
import Report from "../Layouts/Reports/Report";
import Orders from "../Layouts/Orders/Orders";
import OrderDetail from "../Layouts/Orders/OrderDetail";
import Account from "../Layouts/Account/Account";
import Stock from "../Layouts/Stock/Stock";

const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<p>error occured</p>,
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Dashboard/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/product/list',
                element:<Products/>
            },
            {
                path:'/add/product',
                element:<AddProduct/>
            },
            {
                path:'/order/list',
                element:<Orders/>
            },
            {
                path:'/order/detail',
                element:<OrderDetail/>
            },
            {
                path:'/user/list',
                element:<Users/>
            },
            {
                path:'/add/user',
                element:<AddUser/>
            },
            {
                path:'/employee/list',
                element:<Users/>
            },
            {
                path:'/add/employee',
                element:<AddUser/>
            },
            {
                path:'/stock/list',
                element:<Stock/>
            },
            {
                path:'/report',
                element:<Report/>
            },
            {
                path:'/account',
                element:<Account/>
            },
        ]
    }
])

export default router;