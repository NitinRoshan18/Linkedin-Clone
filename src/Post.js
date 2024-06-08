import React from "react";
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="posts">
      <div className="post_header">
        <img
          src="https://media.licdn.com/dms/image/D5603AQF3ga1JAy4o8A/profile-displayphoto-shrink_400_400/0/1711704781148?e=1723075200&v=beta&t=Ceug0GgiaTl8cwKpJhsydQ36BQjj5NkVJBaxDT_Wl8A"
          alt=""
          className="post_avatar"
        />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_media">
        {photoUrl}
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="grey"/>
        <InputOption Icon={CommentIcon} title="Comment" color="grey"/>
        <InputOption Icon={RepeatIcon} title="Repost" color="grey"/>
        <InputOption Icon={SendIcon} title="Send" color="grey"/>

      </div>
    </div>
  );
}

export default Post;
