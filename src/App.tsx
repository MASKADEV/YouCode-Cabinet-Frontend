import React from "react";
import NavBar from './components/NavBar';
import Home from "./views/Home/Home";
import Auth from "./views/Authentication/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/appointment' element= { <Home/> } />
          <Route path='/' element= { <Auth/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
