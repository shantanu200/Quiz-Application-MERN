import React,{useState,useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import MiddlePage from "./Components/MiddleSection/MiddlePage";
import Quiz from "./Components/Quiz/Quiz";
import Home from "./Home";


import "./Style.css"

function App() {
  const [logUser,setLoguser] =  useState({});

  useEffect(() => {
     const LoggedUser = window.localStorage.getItem("LoggedUser");
     setLoguser(JSON.parse(LoggedUser));
  },{})

  return(
    <>
    <Routes>
    <Route path="/" element={<Home logUser={logUser} />} />
    <Route path="/quiz" element={logUser && logUser._id ? <Quiz logUser={logUser} /> : <Home />}></Route>
    <Route path="/info" element={logUser && logUser._id ? <MiddlePage logUser={logUser} /> : <Home/>} />
    <Route path="/leaderboard" element={<LeaderBoard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App;
