
import { IoMdArrowDropdown  } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdDashboard,MdOutlineProductionQuantityLimits,MdOutlineShoppingBasket,MdOutlineFileCopy} from "react-icons/md";
import { FaUsersViewfinder  } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { GoPackage } from "react-icons/go";



export const SideBarMenu = ({ordersOpen,setOrdersOpen,productsOpen,setProductsOpen,usersOpen,setUsersOpen,employeesOpen,setEmployeesOpen}) => {
   


 
    return [
        
        {
        title:'Dasboard',
        path:'/dashboard',
        icon:< MdDashboard  />,
        submenu:false
        },
        
        {
            title:'Products',path:'/product/list',icon:<MdOutlineProductionQuantityLimits  />,
            downArrow:<IoMdArrowDropdown/>,
            submenu:true,
            subMenuOpen:productsOpen,
            setSubMenuOpen:setProductsOpen,
            subMenuItem:
                {title:'Add Product',path:'/add/product'}
            
        },
        {
            title:'Orders',path:'/order/list',icon:<MdOutlineShoppingBasket/>,
            downArrow:<IoMdArrowDropdown/>,
            submenu:true,
            subMenuOpen:ordersOpen,
            setSubMenuOpen:setOrdersOpen,
            subMenuItem:
            {title:'Order Detail',path:'/order/detail'}
            
        },

        {
            title:'Users',path:'/user/list',icon:<FaUsersViewfinder/>,downArrow:<IoMdArrowDropdown/>,
            submenu:true,
            subMenuOpen:usersOpen,
            setSubMenuOpen:setUsersOpen,
            subMenuItem:
            {title:'Add User',path:'/add/user'},
            
        },
        {
            title:'Employees',path:'/employee/list',icon:<HiOutlineUsers  />,downArrow:<IoMdArrowDropdown/>,
            submenu:true,
            subMenuOpen:employeesOpen,
            setSubMenuOpen:setEmployeesOpen,
            subMenuItem:
            {title:'Add Employee',path:'/add/employee'},
    
        },
        {
            title:'Stock',
            path:'/stock/list',
            icon:<GoPackage  />,
        },
        {
            title:'Account',
            path:'/account',
            icon:<GrMoney/>,
            submenu:false
        },

        {
            title:'Report',
            path:'/report',
            icon:<MdOutlineFileCopy/>,
            submenu:false
        },




    ]
 
};
    
