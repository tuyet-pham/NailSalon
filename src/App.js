import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Order from "./pages/OrderPage";
import Login from "./pages/Login";
import NoPages from "./pages/NoPages";
import ServiceMenu from "./pages/ServiceMenu";
import Lashes from "./pages/Lashes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="service-menu" element={<ServiceMenu />} />
          <Route path="lashes" element={<Lashes />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
