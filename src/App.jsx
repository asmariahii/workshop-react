import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const NavigationBar = React.lazy(() => import('./Components/NavigationBar'));
 
const Hello = React.lazy(() => import('./Components/Hello'));
const Form = React.lazy(() => import('./Components/Form'));
const ComponentClass = React.lazy(() => import('./Components/ComponentClass'));
const ComponentFonct = React.lazy(() => import('./Components/ComponentFonct'));
const ComponentEffect = React.lazy(() => import('./Components/ComponentEffect'));
const ComponentTimer = React.lazy(() => import('./Components/ComponentTimer'));
const ColorBox = React.lazy(() => import('./Components/ColorBox'));
const Counter = React.lazy(() => import('./Components/Counter'));
const ListManager = React.lazy(() => import('./Components/ListManager'));
const NoteManager = React.lazy(() => import('./Components/NoteManager'));
const TodoList = React.lazy(() => import('./Components/TodoList'));
const Events = React.lazy(() => import('./Components/Events'));
const Home = React.lazy(() => import('./Components/Home'));
const NotFound = React.lazy(() => import('./Components/NotFound'));
const EventDetails = React.lazy(() => import('./Components/EventDetails'));



function App() {
  const [count, setCount] = useState(0);

  return (
      <>
        {/* Add the Navbar component here */}
        <NavigationBar />

        {/* Suspense pour gérer les composants avec lazy loading */}
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/events" element={<Events />} />
            <Route path="/TodoList" element={<Events />} />
            <Route path="/event/:eventId" element={<EventDetails />} />


            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </>
  );
}

export default App;
