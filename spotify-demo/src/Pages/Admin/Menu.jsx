import React from "react";
import { assets } from "../../assets/admin-assets/assets";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-green-900 px-2 py-3 sm:min-h-screen sm:pl-[4vw] sm:px-[1vw] flex items-center w-full sm:block sm:w-[20vw]">
      <NavLink to="/">
        <img
          src={assets.logo}
          className="mt-5 w-[max(10vw,100px)] hidden sm:block"
          alt=""
        />
        <img
          src={assets.logo_small}
          className="sm:mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block"
          alt=""
        />
      </NavLink>

      <div className="flex sm:flex-col gap-5 sm:mt-10 ">
        <NavLink to="/admin" className="nav-link">
          <img src={assets.song_icon} className="w-5" alt="" />
          <p className="hidden sm:block">List Song</p>
        </NavLink>
        <NavLink to="/admin/add-song" className="nav-link">
          <img src={assets.add_song} className="w-5" alt="" />
          <p className="hidden sm:block">Add Song</p>
        </NavLink>
        <NavLink to="/admin/add-album" className="nav-link">
          <img src={assets.add_album} className="w-5" alt="add_album" />
          <p className="hidden sm:block">Add Album</p>
        </NavLink>
        <NavLink to="/admin/list-album" className="nav-link">
          <img src={assets.album_icon} className="w-5" alt="list_album" />
          <p className="hidden sm:block">List Album</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
