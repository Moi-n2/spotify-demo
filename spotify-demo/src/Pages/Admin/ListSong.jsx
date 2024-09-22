import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";

const ListSong = () => {
  const { songsData, removeSong } = useContext(AdminContext);
  return (
    <div>
      <p className="font-semibold text-black">All Songs List</p>
      <br></br>
      <div>
        <header className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </header>
        {songsData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_1fr_1.5fr_0.5fr_0.5fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-4 sm:gap-2.5 p-5 sm:p-3 border border-gray-300 text-sm mr-5"
          >
            <img className="w-12" src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.album}</p>
            <p>{item.duration}</p>
            <button
              className="cursor-pointer"
              onClick={() => {
                removeSong(item._id);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
