import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";

const ListAlbum = () => {
  const { albumsData, removeAlbum } = useContext(AdminContext);
  return (
    <div>
      <p className="font-semibold text-black">All Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Colour</b>
          <b>Action</b>
        </div>
        {albumsData.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_2fr_0.5fr_0.5fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-6 sm:gap-2.5 p-5 sm:p-3 border border-gray-300 text-sm mr-5"
            >
              <img className="w-12" src={item.image} alt="" />
              <p>{item.name}</p>
              <p className="hidden sm:block">{item.desc}</p>
              <p className="block sm:hidden">{item.desc.slice(0, 20)}...</p>
              <input
                type="color"
                className="block sm:hidden size-6"
                defaultValue={item.bgColor}
              />
              <input
                type="color"
                className="hidden sm:block"
                defaultValue={item.bgColor}
              />
              <p
                onClick={() => removeAlbum(item._id)}
                className="cursor-pointer"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAlbum;
