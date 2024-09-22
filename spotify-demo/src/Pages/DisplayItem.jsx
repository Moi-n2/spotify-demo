import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";
import { AdminContext } from "../context/AdminContext";

const DisplayItem = () => {
  const { songsData, albumsData } = useContext(AdminContext);
  const { id } = useParams();
  const { playWithId } = useContext(PlayerContext);
  const album = albumsData.find((item) => item._id == id);
  const songList = songsData.filter((item) => item.album === album.name);

  return (
    <div className="h-[80vh] flex flex-col overflow-auto">
      <section className="flex gap-8">
        <img className="w-48 rounded" src={album.image} alt="" />
        <div className="flex flex-col gap-2">
          <p>Playlist</p>
          <h2 className="text-3xl font-bold mb-4 md:text-4xl ">{album.name}</h2>
          <p className="hidden sm:block">{album.desc}</p>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b> Spotify</b>• 23,052,003 likes • <b> 50 songs, </b>
            about 2 hr 30 min
          </p>
        </div>
      </section>
      <section className="block sm:hidden mt-2">
        <h1 className="font-bold mb-1">Description:</h1>
        <p>{album.desc}</p>
      </section>

      <section className="grid grid-cols-[1.5fr_1fr_0.5fr]  sm:grid-cols-4 mt-10 mb-4 pl-2 text-yellow-700">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </section>

      <section className="overflow-auto">
        {songList.map((item, index) => {
          return (
            <div
              onClick={() => playWithId(item._id)}
              key={index}
              className="grid grid-cols-[1.5fr_1fr_0.5fr]  sm:grid-cols-4 gap-2 p-2 items-center text-gray-950 hover:bg-green-100"
            >
              <p className="text-black">
                <b className="mr-4 text-green-950">{index + 1}</b>
                <img className="inline w-10 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              <p className="text-[15px]">{album.name}</p>
              <p className="text-[15px] hidden sm:block">5 days ago</p>
              <p className="text-[15px text-center">{item.duration}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default DisplayItem;
