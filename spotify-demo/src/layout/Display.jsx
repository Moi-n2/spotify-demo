import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayItem from "./DisplayItem";
import Navbar from "./Navbar";

const Display = () => {
  return (
    <main className="w-screen lg:w-[80%] flex flex-col px-4 justify-between">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<DisplayHome></DisplayHome>}></Route>
        <Route path="/album/:id" element={<DisplayItem></DisplayItem>}></Route>
      </Routes>
    </main>
  );
};

export default Display;
