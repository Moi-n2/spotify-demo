import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ data }) => {
  const navigate = useNavigate();
  const { image, name, desc, id } = data;
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-black text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;
