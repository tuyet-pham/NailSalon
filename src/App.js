import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NoPages from "./pages/NoPages";
import ServiceMenu from "./pages/ServiceMenu";
import LookBook from "./pages/LookBook";
import Lashes from "./pages/Lashes";
import Recovery from "./pages/Recovery"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="service-menu" element={<ServiceMenu />} />
          <Route path="look-book" element={<LookBook />} />
          <Route path="lashes" element={<Lashes />} />

          <Route path="login" element={<Login />} />
          <Route path="recovery" element={<Recovery />} />

          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
