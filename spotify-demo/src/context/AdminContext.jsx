import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const URL = "http://localhost:4000";

const AminContextProvider = ({ children }) => {
  const [albumsData, setAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  const loadAlbumsData = async () => {
    try {
      const res = await axios.get(`${URL}/api/album/list`);
      if (res.data.success) {
        setAlbumsData(res.data.albums);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Unable to load albums data");
    }
  };

  const loadSongsData = async () => {
    try {
      const res = await axios.get(`${URL}/api/song/list`);
      if (res.data.success) {
        setSongsData(res.data.songs);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Unable to load songs data");
    }
  };

  const addSong = async (data, cb) => {
    try {
      const res = await axios.post(`${URL}/api/song/add`, data);

      if (res.data.success) {
        toast.success(res.data.message);
        loadSongsData();
        cb();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Unable to add song");
    }
  };

  const removeSong = async (id) => {
    try {
      const res = await axios.delete(`${URL}/api/song/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        await loadSongsData();
      }
    } catch (error) {
      toast.error("Unable to remove song");
    }
  };

  const addAlbum = async (data, cb) => {
    try {
      const res = await axios.post(`${URL}/api/album/add`, data);

      if (res.data.success) {
        toast.success(res.data.message);
        loadAlbumsData();
        cb();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Unable to add Album");
    }
  };

  const removeAlbum = async (id) => {
    try {
      const res = await axios.delete(`${URL}/api/album/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        await loadAlbumsData();
      }
    } catch (error) {
      toast.error("Unable to remove album");
    }
  };

  useEffect(() => {
    loadAlbumsData();
    loadSongsData();
  }, []);
  const contextValue = {
    albumsData,
    songsData,
    addSong,
    removeSong,
    addAlbum,
    removeAlbum,
  };
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export default AminContextProvider;
