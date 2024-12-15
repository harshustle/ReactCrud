import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import PostUser from "./components/postUser/postUser";
import UpdateUser from "./components/updateUser/updateUser";
import NoMatch from "./components/nomatch/noMatch";
import Header from "./components/header/header";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/user" element={<PostUser></PostUser>} />
        <Route path="/user/:id" element={<UpdateUser ></UpdateUser>} />
        <Route path="*" element={<NoMatch></NoMatch>} />
      </Routes>
    </>
  );
}

export default App;
