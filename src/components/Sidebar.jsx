import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";

import './CSS/Sidebar.css'
import { SideBarMenu } from './menu';


const Sidebar = () => {


    const [barOpen, setBarOpen] = useState(true);
    const [ordersOpen, setOrdersOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [usersOpen, setUsersOpen] = useState(false);
    const [employeesOpen, setEmployeesOpen] = useState(false);

    const Menus= SideBarMenu({ordersOpen,setOrdersOpen,productsOpen,setProductsOpen,usersOpen,setUsersOpen,employeesOpen,setEmployeesOpen});

    return (
        <>

            <div className={`bg-blue-950 min-h-screen ${barOpen ? 'w-2xs' : 'w-15'} duration-300 text-amber-50 flex flex-col px-3 gap-5 relative pb-10`}>
                <BsArrowLeftShort
                    className={`text-3xl z-10 absolute top-10 -right-3 text-blue-900 bg-amber-50 rounded-full  cursor-pointer duration-700 ${barOpen ? 'rotate-0 border-r-2' : 'rotate-180 border-l-2'}`}
                    onClick={() => setBarOpen(!barOpen)}
                />

                <div className={`flex  mt-8 duration-500 ${barOpen ? 'rotate-[360deg] justify-center mx-auto w-2/4' : '-rotate-0 justify-start '}`}>
                    <Link to={'/dashboard'} >
                        <img src="/logo.png" alt="logo" />
                    </Link>
                </div>

                <div className={`flex items-center justify-center gap-3 bg-slate-50 opacity-95 py-3 pl-0 text-black pr-3 rounded-md ${barOpen || 'hidden'}  `}>
                    <GrSearch />

                    <input type="search" placeholder='Search'
                        className='focus:outline-none ' />

                </div>

                <div className={barOpen ? 'hidden' : 'cursor-pointer mx-auto px-2.5  py-1.5 bg-blue-900 rounded-sm '}
                    onClick={() => setBarOpen(!barOpen)}>
                    <GrSearch
                    />

                </div>

                {
                    Menus.map((menu, indx) => (

                        <ul key={indx} className={`flex flex-col gap-1 font-semibold 
                        ${barOpen ? ' toggleOpen' : 'toggleClose'} 
                    `}>

                            <NavLink to={menu.path} className={`w-full  flex  gap-3 items-center overflow-hidden ${barOpen ? 'items-start px-2 ' : 'px-1  '} hover:bg-blue-900  py-2 hover:border-b duration-700 rounded-md `}
                            >

                                <span className={`text-2xl duration-500 ${barOpen ? 'rotate-[360deg]' : '-right-[360deg]'}`}>{menu.icon}</span>

                                <span className='w-full '>
                                    {menu.title}
                                </span>

                                <span className={`flex ${menu.subMenuOpen ? 'rotate-180 ' : 'rotate-0 '} `}
                                    onClick={() => menu.setSubMenuOpen(!menu.subMenuOpen)}>{menu?.downArrow}
                                </span>

                            </NavLink>
                         
                         <div className={`transition-all duration-500 ease-in-out overflow-hidden ${menu.subMenuOpen && barOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'} 
                `}>
                               {
                                menu.submenu && menu.subMenuOpen && barOpen && (
                                    <NavLink to={menu.subMenuItem?.path}
                                        className='hover:bg-blue-900   hover:border-b  w-full  flex py-2 gap-3 items-center overflow-hidden rounded-md pl-8 font-normal before:content-start  
                                      '

                                    >
                                        {
                                            menu.subMenuItem?.title
                                        }
                                    </NavLink>)
                                    }
                         </div>
                         
                        </ul>
                    ))
                }
            </div>

        </>
    );
};

export default Sidebar;