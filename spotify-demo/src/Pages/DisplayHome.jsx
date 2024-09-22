import React, { useContext } from "react";
import ListItem from "../components/ListItem";
import { AdminContext } from "../context/AdminContext";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(AdminContext);
  return (
    <div className="flex flex-col flex-1 mt-2">
      <section className="py-4 flex-1">
        <h1 className="mb-2 font-bold text-xl">Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((item, index) => {
            return <ListItem data={item} key={index} isAlbum={true}></ListItem>;
          })}
        </div>
      </section>

      <section className="py-4 flex-1">
        <h1 className="mb-2 font-bold text-xl">Today's Biggest Hits</h1>
        <div className="flex  overflow-auto">
          {songsData.map((item, index) => {
            return (
              <ListItem data={item} key={index} isAlbum={false}></ListItem>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DisplayHome;
