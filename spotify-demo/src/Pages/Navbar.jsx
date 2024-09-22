import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";
import Button from "../components/Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[8%] w-full flex justify-between items-center font-semibold py-4">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-7 bg-green-900 p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-7 bg-green-900 p-2 rounded-2xl cursor-pointer mr-6"
            src={assets.arrow_right}
            alt=""
          />
          <div className="hidden sm:flex sm:gap-2">
            <Button>All</Button>
            <Button>Music</Button>
            <Button>Podcasts</Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-green-700 text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-green-700 py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p
            onClick={() => navigate("/admin")}
            className="bg-yellow-500 px-1.5 py-1 text-black rounded-full flex items-center justify-center hover:cursor-pointer"
          >
            USER
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
