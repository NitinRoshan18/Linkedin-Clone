import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget"
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login/>
      ):(
      
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      )}
    </div>
  );
}

export default App;
