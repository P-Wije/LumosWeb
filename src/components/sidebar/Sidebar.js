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
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Lumos Admin</span>
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
                   <li>
                       <GroupIcon className="icon"/>
                       <span>Users</span>
                   </li>
                   <li>
                       <AutoStoriesIcon className="icon"/>
                       <span>Products</span>
                   </li>
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
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}
export default Sidebar