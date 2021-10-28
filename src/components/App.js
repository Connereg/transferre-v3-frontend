import React, { useState, useEffect } from "react";
import '../App.css';
import Header from "./Header";
import NavBar from "./NavBar";

import Body from "./Body";


function App() {
  const [loggedInStatus, setLoggedInStatus] = useState(localStorage.getItem("isLoggedIn"));
  const [user, setUser] = useState(null)

  function retrieveLoggedInStatus(lis) {
    setLoggedInStatus(lis);
  }

  return (
    <div className="App">
      <Header />
      <NavBar loggedInStatus={loggedInStatus} retrieveLoggedInStatus={retrieveLoggedInStatus} setUser={setUser} />
      <Body loggedInStatus={loggedInStatus} />
    </div>
  );
}

export default App;
