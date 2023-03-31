import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import RouteTest from './componet/RouteTest';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path = "/new" element ={<New />} />
          <Route path = "/edit" element ={<Edit />} />
          <Route path = "/diary" element ={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
};

export default App;