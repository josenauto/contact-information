import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [contact, setContact] = useState(data);
  return (
    <div className="App">
      <h3>You have {contact.length} contacts</h3>
      <List />
    </div>
  );
}

export default App;
