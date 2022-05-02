import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home'
import Dia from '../pages/Dia'
import Config from '../pages/Config'

export default function Router() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={
          <Home />
      }/>
      <Route path="/dia" element={
          <Dia />
      }/>
      <Route path="/config" element={
          <Config />
      }/>
    </Routes>
  </BrowserRouter>
  );
}