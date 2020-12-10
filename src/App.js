import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import data from "./data";

function App() {
  const [contact, setContact] = useState(data);
  return (
    <div className="App">
      <h3>You have {contact.length} contacts</h3>
    </div>
  );
}

export default App;
