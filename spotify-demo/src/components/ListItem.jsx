import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const AlbumItem = ({ data, isAlbum }) => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);
  const { image, name, desc, _id } = data;
  const handleClick = () => {
    if (isAlbum) {
      navigate(`/album/${_id}`);
    } else {
      playWithId(_id);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-black text-sm">{desc.slice(0, 12)}...</p>
    </div>
  );
};

export default AlbumItem;
