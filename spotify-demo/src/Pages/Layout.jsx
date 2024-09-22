import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Player from "./Player";
import { PlayerContext } from "../context/PlayerContext";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <main className="w-screen lg:w-[80%] flex flex-col px-4">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </main>
      </div>
      {track ? <Player></Player> : ""}

      <audio
        ref={audioRef}
        src={track ? track.file : ""}
        preload="auto"
      ></audio>
    </div>
  );
};

export default Layout;
