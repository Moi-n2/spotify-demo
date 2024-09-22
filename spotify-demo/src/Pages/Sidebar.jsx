import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import Button from "../components/Button";

const Sidebar = () => {
  return (
    <div className="w-[20%] p-2 flex-col gap-2 text-white hidden lg:flex">
      <section className="h-[12vh] bg-green-700 rounded flex flex-col justify-around">
        <div className="flex-1 flex items-center gap-3 pl-8 cursor-pointer hover:bg-green-500">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold uppercase">Home</p>
        </div>
        <div className="flex-1 flex items-center gap-3 pl-8 cursor-pointer hover:bg-green-500">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold uppercase">Search</p>
        </div>
      </section>

      <section className="bg-green-700 rounded flex-1">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.stack_icon} alt="" />
            <p className="font-semibold uppercase">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-green-900 m-2 rounded font-semibold flex flex-col items-start justify-start ap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light italic mt-2 mb-2">
            It's easy we will help you
          </p>
          <Button>Create Playlist</Button>
        </div>

        <div className="p-4 bg-green-900 m-2 rounded font-semibold flex flex-col items-start justify-start ap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light italic mt-2 mb-2">
            We'll keep you updated on the new episodes
          </p>
          <Button>Browse podcasts</Button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
