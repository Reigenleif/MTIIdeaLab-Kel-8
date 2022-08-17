import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Jadwal from "./pages/Jadwal";
import Kantin from "./pages/Kantin";
import Notfound from "./pages/Notfound";

function App() {
  document.title = "Foodonex"
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kantin" element={<Kantin />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Layout>
  );
}

export default App;
