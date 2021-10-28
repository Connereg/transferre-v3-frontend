import React, { useState, useEffect } from "react";
import '../App.css';
import Header from "./Header";
import NavBar from "./NavBar";

import Body from "./Body";


function App() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [user, setUser] = useState({})

  function retrieveLoggedInStatus(lis) {
    setLoggedInStatus(lis);
    localStorage.setItem("isLoggedIn", true);
  }

  return (
    <div className="App">
      <Header />
      <NavBar loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} retrieveLoggedInStatus={retrieveLoggedInStatus} setUser={setUser} />
      <Body loggedInStatus={loggedInStatus} user={user}/>
    </div>
  );
}

export default App;
