import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import * as authService from './services/auth';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import MyPets from "./components/MyPets/MyPets";


function App() {
  const [userData, setUserData] = useState({
    isAuth: false,
    username: ''
  });

  useEffect(() => {
    setUserData(
      authService.getCurrentUser()
    );
  }, []);

  return (
    <div id="container">
      <div className="App">
        <Header {...userData} setUserData={setUserData} />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login setUserData={setUserData} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout setUserData={setUserData} />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:petId" element={<Details />} />
            <Route path="/edit/:petId" element={<Edit />} />
            <Route path="/my-pets" element={<MyPets />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
