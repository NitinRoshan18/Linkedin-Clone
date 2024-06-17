import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
      <div className="header_middle">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={SmsRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption Icon={AccountCircleRoundedIcon}  title="Me" />
      </div>
      <div className="header_right">
        <HeaderOption Icon={AppsRoundedIcon} title="For Business" /><ArrowDropDownIcon/>
        <a href="linkedin.com">
          Upskill With
          <br />
          Premium
        </a>
      </div>
    </div>
  );
}

export default Header;
