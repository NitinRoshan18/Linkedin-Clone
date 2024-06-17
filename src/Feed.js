import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import Post from "./Post";
import { db, serverTimestamp } from "./firebase";
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    );

    return () => unsubscribe();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      name: 'Nitin Roshan',
      description: '| Aspiring Full Stack Developer | React Developer |...',
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_input_container">
        <div className="feed_input">
          
          <form>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Start a post, try writing with AI"
            />
            <button onClick={sendPost} type="submit">Send</button>
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
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
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
