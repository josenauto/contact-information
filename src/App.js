import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import data from "./data";
import List from "./List";
import { Container } from "react-bootstrap";

function App() {
  const [contact, setContact] = useState(data);
  return (
    <div className="App">
      <Container>
        <h3>You have {contact.length} contacts</h3>
        <button onClick={() => setContact([])}>Delete contacts</button>
        <List contact={contact} />
      </Container>
    </div>
  );
}

export default App;
