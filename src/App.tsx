import { Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Jadwal from "./pages/Jadwal";
import Kantin from "./pages/Kantin";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Setting from "./pages/Setting";
import AuthContext from "./util/context/authContext";
import { useLoginState } from "./util/login";

function App() {
  const { name } = useContext(AuthContext)

  if (!name) {
    return <Login/>
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kantin" element={<Kantin />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/pengaturan" element={<Setting/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Layout>
  );
}

export default App;
