import { createContext, useEffect, useRef, useState } from "react";
import { songsData, albumsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (prop) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  //   const [songsData, setSongsData] = useState([...songsData]);

  //   const [albumsData, setAlbumsData] = useState([]);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = (id) => {
    songsData.map(async (item) => {
      if (id === item.id) {
        await setTrack(item);
        play();
      }
    });
  };

  const previous = () => {
    songsData.map(async (item, index) => {
      if (track.id === item.id && index > 0) {
        await setTrack(songsData[index - 1]);
        play();
      }
    });
  };

  const next = () => {
    songsData.map(async (item, index) => {
      if (track.id === item.id && index < songsData.length - 1) {
        await setTrack(songsData[index + 1]);
        play();
      }
    });
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
      setTime({
        currentTime: {
          second: 0,
          minute: 0,
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    songsData,
    albumsData,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {prop.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
