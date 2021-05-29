import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./components/Header/Header";
import TopHeadline from "./components/TopHeadline/TopHeadline";

function App() {
  return (
    <div>
      <h1>React Bootstrap</h1>
      <TopHeadline></TopHeadline>
      <Button variant="success">Success</Button>
      <Header></Header>
    </div>
  );
}

export default App;
