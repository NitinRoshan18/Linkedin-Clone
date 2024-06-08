import React from "react";
import "./Sidebar.css";
import SquareIcon from "@mui/icons-material/Square";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import TagIcon from "@mui/icons-material/Tag";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media.licdn.com/dms/image/D5616AQERrjM5U12Iaw/profile-displaybackgroundimage-shrink_350_1400/0/1712717090228?e=1723075200&v=beta&t=v_jDFTJDEOAAu9-5qeygTqfS3PE4vqWxFNBvWy5fBRY"
          alt=""
          className="sidebar_background_img"
        />
        <img
          src="https://media.licdn.com/dms/image/D5603AQF3ga1JAy4o8A/profile-displayphoto-shrink_400_400/0/1711704781148?e=1723075200&v=beta&t=Ceug0GgiaTl8cwKpJhsydQ36BQjj5NkVJBaxDT_Wl8A"
          alt=""
          className="sidebar_avatar"
        />
        <h3>Nitin Roshan</h3>
        <h6>
          {" "}
          | Aspiring Full Stack Developer | React
          <br /> Developer | Seeking Internships |<br /> Reliance Foundation
          Scholar |{" "}
        </h6>
        <div className="Sidebar_stats">
          <p>Profile viewers</p>
          <span>73</span>
        </div>
        <div className="Sidebar_stats">
          <p>View all analytics</p>
          <span>1</span>
        </div>

        <div id="premium_sub">
          <a href="linkedin.com">
            Grow your career or business with
            <br /> Premium
          </a>
          <p>
            <SquareIcon />
            Try Premium for ₹0
          </p>
        </div>

        <div className="saved_items">
          <BookmarkIcon /> Saved items
        </div>
      </div>
      <div className="sidebar_bottom">
        <div className="recents">
          <p>Recents</p>
          <span>
            <GroupsIcon />
            <p>JavaScript Typescript Angular...</p>
          </span>
          <span>
            <GroupsIcon />
            <p>Full Stack Developer - Java tec...</p>
          </span>
          <span>
            <TagIcon />
            <p>money</p>
          </span>
          <span>
            <TagIcon />
            <p>economy</p>
          </span>
          <span>
            <TagIcon />
            <p>markets</p>
          </span>
        </div>

        <div className="recents">
          <h6>Groups</h6>
          <span>
            <GroupsIcon />
            <p>JavaScript Typescript Angular...</p>
          </span>
          <span>
            <GroupsIcon />
            <p>Full Stack Developer - Java tec...</p>
          </span>
          <span>
            <GroupsIcon />
            <p>React Js and React Native Devel...</p>
          </span>
        </div>

        <div className="recents">
          <h6>Events</h6>
          <h6> Followed Hashtags</h6>
          <span>
            <TagIcon />
            <p>money </p>
          </span>
          <span>
            <TagIcon />
            <p>economy</p>
          </span>
          <span>
            <TagIcon />
            <p>markets</p>
          </span>
        </div>
        <p>Discover More</p>
      </div>
    </div>
  );
}

export default Sidebar;
