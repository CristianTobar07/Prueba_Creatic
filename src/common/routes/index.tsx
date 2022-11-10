import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComposite from "../../components/login/login-composite";
import NosotrosComposite from "../../components/nosotros/nosotros-composite";

const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NosotrosComposite />} />
        <Route path="Login" element={<LoginComposite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRoutes;
