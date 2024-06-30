import React from 'react';
import {BrowserRouter, Routes/*used to be Switch*/, Route, Link} from "react-router-dom";
import Home from './routes/Home.js';
import Registry from './routes/Registry.js';
import './App.css';


// az exact azért kell mert különben a / az mindenre match-elni fog, és így mindig a home jelenne meg
function App() {
  return (
    <div className="App">
      <div>asda</div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="registry" element={<Registry/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
