import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<h1>REACT</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
