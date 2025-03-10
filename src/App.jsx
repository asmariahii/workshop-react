import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./Components/Hello";
import Form from "./Components/Form";
import ComponentClass from "./Components/ComponentClass";
import ComponentFonct from "./Components/ComponentFonct";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import ColorBox from "./Components/ColorBox";
import Events from "./Components/Events";
import Event from "./Components/Event";
import NoteManager from "./Components/NoteManager";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import './App.css'

// import NotFound from './Component/NotFound'
// Lazy loading des composants
const Events = React.lazy(() => import("./Component/Events"));
const Products = React.lazy(() => import("./Component/Products"));
const NotFound = React.lazy(() => import("./Component/NotFound"));

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Hello />

<Form
  labelle="FirstName : "
  type="text"
  namee="FirstName"
  name="Firstname"
/>
<Form labelle="LastName : " />
<div className="App">
  <ComponentClass />
</div>
<div className="App">
  <ComponentFonct/>
</div>
<div className="App">
  <Counter/>
</div>
<div className="App">
  <Timer/>
</div>

<div className="App">
  <ColorBox/>
</div> */}

     <div className="App">
      <h1 className="text-center my-4">Event Management System</h1>
      <Events/>
    </div>

    <div className="App">
  <NoteManager/>
</div>
      
      
    </>
  );
}

export default App;