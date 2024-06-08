import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      <div className="feed_input_container">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Start a post, try writing with AI"
            />
            <button type="submit">send</button>
          </form>
        </div>
        <div className="feed_input_option">
          <InputOption
            Icon={PhotoSizeSelectActualOutlinedIcon}
            title="Media"
            color="#70B5F9"
          />
          <InputOption
            Icon={CalendarMonthOutlinedIcon}
            title="Event"
            color="#ED820E"
          />
          <InputOption
            Icon={NewspaperOutlinedIcon}
            title="Write article"
            color="#FC6A03"
          />
        </div>
      </div>
      <div>
        <Post
          name="Nitin Roshan"
          description="| Aspiring Full Stack Developer | React Developer |..."
          message="I'm overflowing with gratitude. Thank you for believing in my potential.
           Proud to be hashtag#RelianceFoundationScholar 
           Reliance Foundation hashtag#RelianceFoundationUndergraduateScholarships hashtag#Results hashtag#RelianceFoundationTransformingLives"
          
        />
      </div>
    </div>
  );
}

export default Feed;
