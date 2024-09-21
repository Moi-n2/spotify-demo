import React from "react";
import { albumsData, songsData } from "../assets/frontend-assets/assets";
import AlbumItem from "../components/AlbumItem";

const DisplayHome = () => {
  return (
    <div className="flex flex-col mt-2 justify-between overflow-auto">
      <section className="py-4 flex-1">
        <h1 className="mb-2 font-bold text-xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => {
            return <AlbumItem data={item} key={index}></AlbumItem>;
          })}
        </div>
      </section>

      <section className="py-4 flex-1">
        <h1 className="mb-2 font-bold text-xl">Today's Biggest Hits</h1>
        <div className="flex  overflow-auto">
          {songsData.map((item, index) => {
            return <AlbumItem data={item} key={index}></AlbumItem>;
          })}
        </div>
      </section>
    </div>
  );
};

export default DisplayHome;
