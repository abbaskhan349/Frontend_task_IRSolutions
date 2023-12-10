// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  Route,
  Routes,
  // Redirect,
} from 'react-router-dom';

import './App.css';
import Login from './Pages/Login';
// import HomePage from './Pages/HomePage';
import { Header } from './Components/Header';

function App() {
  return (
    <Routes>
      {/* Public route for login */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/home" element={<HomePage />} /> */}
      <Route path="/home" element={<Header />} />
    </Routes>
  );
}

export default App;
