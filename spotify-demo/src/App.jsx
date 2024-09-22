import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Pages/layout";
import DisplayHome from "./Pages/DisplayHome";
import DisplayItem from "./Pages/DisplayItem";
import AdminPanel from "./Pages/Admin/AdminPanel";
import AddSong from "./Pages/Admin/AddSong";
import ListSong from "./Pages/Admin/ListSong";
import AddAlbum from "./Pages/Admin/AddAlbum";
import ListAlbum from "./Pages/Admin/ListAlbum";

const App = () => {
  return (
    <div className="bg-green-200 h-screen w-screen">
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<DisplayHome></DisplayHome>}></Route>
          <Route
            path="/album/:id"
            element={<DisplayItem></DisplayItem>}
          ></Route>
        </Route>
        <Route path="/admin" element={<AdminPanel></AdminPanel>}>
          <Route index element={<ListSong />} />
          <Route path="add-song" element={<AddSong />} />
          <Route path="add-album" element={<AddAlbum />} />
          <Route path="list-album" element={<ListAlbum />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
