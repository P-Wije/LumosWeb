import "./sidebar.scss"
import DashboardIcon from'@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookIcon from '@mui/icons-material/Book';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {DarkModeContext} from "../../context/darkModeContext";

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <span className="logo">Lumos Admin</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                   <p className="title">MAIN</p>
                   <li>
                       <DashboardIcon className="icon"/>
                       <span>Dashboard</span>
                   </li>
                   <p className="title">LISTS</p>
                   <Link to={"/users"} style={{textDecoration: "none"}}>
                       <li>
                           <GroupIcon className="icon"/>
                           <span>Users</span>
                       </li>
                   </Link>
                   <Link to={"/products"} style={{textDecoration: "none"}}>
                   <li>
                       <AutoStoriesIcon className="icon"/>
                       <span>Products</span>
                   </li>
                   </Link>
                   <li>
                       <BookIcon className="icon"/>
                       <span>Orders</span>
                   </li>
                   <li>
                       <LocalShippingIcon className="icon"/>
                       <span>Delivery</span>
                   </li>
                   <p className="title">USEFUL</p>
                   <li>
                       <QueryStatsIcon className="icon"/>
                       <span>Stats</span>
                   </li>
                   <li>
                       <NotificationsActiveIcon className="icon"/>
                       <span>Notifications</span>
                   </li>
                   <p className="title">SERVICE</p>
                   <li>
                       <MonitorHeartIcon className="icon"/>
                       <span>System Health</span>
                   </li>
                   <li>
                       <ListAltIcon className="icon"/>
                       <span>Logs</span>
                   </li>
                   <li>
                       <SettingsApplicationsIcon className="icon"/>
                       <span>Settings</span>
                   </li>
                   <p className="title">USER</p>
                   <li>
                       <AccountBoxIcon className="icon"/>
                       <span>Profile</span>
                   </li>
                   <li>
                       <LogoutIcon className="icon"/>
                       <span>Logout</span>
                   </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}
export default Sidebar