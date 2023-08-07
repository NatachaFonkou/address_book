import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Test from "../pages/Test/test";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

function AppRouter() {

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      console.log("here");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
