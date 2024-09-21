import React, { useContext } from "react";
import Sidebar from "./layout/Sidebar";
import Display from "./layout/Display";
import Player from "./layout/Player";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="bg-green-200 h-screen w-screen flex flex-col">
      <main className="flex h-[90vh]">
        <Sidebar></Sidebar>
        <Display></Display>
      </main>
      <Player></Player>

      <audio
        ref={audioRef}
        src={track ? track.file : ""}
        preload="auto"
      ></audio>
    </div>
  );
};

export default App;
