import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Menu from "./Menu";
import AddSong from "./AddSong";
import ListSong from "./ListSong";

const AdminPanel = () => {
  return (
    <div className="flex items-start h-full sm:min-h-screen flex-col sm:flex-row">
      <Menu></Menu>
      <main className="flex-1 h-screen overflow-y-auto bg-[#F#FFF7]">
        <header className="navbar bg-green-100 uppercase w-full border-b-2 border-yellow-900 px-5 sm:px-12 py-4 text-lg hidden sm:block">
          Admin Panel
        </header>
        <div className="py-6 pl-5 sm:pt-12 sm:pl-12">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
