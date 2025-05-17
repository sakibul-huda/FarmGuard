import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from "../Pages/Products/Products";
import AddProduct from "../Pages/Products/AddProduct";
import Users from "../Pages/Users/Users";
import AddUser from "../Pages/Users/AddUser";
import Report from "../Pages/Reports/Report";
import Orders from "../Pages/Orders/Orders";
import OrderDetail from "../Pages/Orders/OrderDetail";
import Account from "../Pages/Account/Account";
import Stock from "../Pages/Stock/Stock";
import Login from "../Authenication/Login";

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
            {
                path:'/login',
                element:<Login/>
            },
        ]
    }
])

export default router;