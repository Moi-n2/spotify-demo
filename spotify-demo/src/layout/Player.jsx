import { useContext, useEffect, useRef } from "react";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekSong,
    previous,
    next,
    time,
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
  } = useContext(PlayerContext);
  const { name, image, desc } = track;

  return (
    <div className="h-[10vh] min-h-[70px] w-screen fixed bottom-0 bg-green-900 flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={image} alt="" />
        <div>
          <p>{name}</p>
          <p>{desc.slice(0, 12)}...</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
            onClick={previous}
          />
          {playStatus ? (
            <img
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
              onClick={pause}
            />
          ) : (
            <img
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
              onClick={play}
            />
          )}

          <img
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
            onClick={next}
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute || 0}:{time.currentTime.second || 0}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-yellow-500 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute || 0}:{time.totalTime.second || 0}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
