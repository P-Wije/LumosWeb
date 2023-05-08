import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import {ChatBubbleOutlineOutlined, ListOutlined, NotificationsNoneOutlined} from "@mui/icons-material";

const Navbar = () => {
  return (
      <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..."/>
            <SearchIcon/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className={"Icon"}/>
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className={"Icon"}/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className={"Icon"}/>
            </div>
            <div className="item">
              <NotificationsNoneOutlined className={"Icon"}/>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlined className={"Icon"}/>
            </div>
            <div className="item">
              <ListOutlined className={"Icon"}/>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Navbar