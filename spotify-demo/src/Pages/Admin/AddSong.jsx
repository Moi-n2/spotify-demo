import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/admin-assets/assets";
import { AdminContext } from "../../context/AdminContext";

const AddSong = () => {
  const [song, setSong] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);

  const { albumsData, addSong } = useContext(AdminContext);

  const clearForm = () => {
    setName("");
    setDesc("");
    setAlbum("none");
    setImage(null);
    setSong(null);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("audio", song);
    formData.append("album", album);

    await addSong(formData, clearForm);
    setLoading(false);
  };

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start sm:gap-8 gap-6 text-gray-600"
    >
      <header className="font-semibold text-black">ADD Song</header>
      <section className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Song</p>
          <input
            onChange={(e) => setSong(e.target.files[0])}
            type="file"
            id="song"
            accept="audio/* "
            hidden
          ></input>
          <label htmlFor="song">
            <img
              src={song ? assets.upload_added : assets.upload_song}
              alt="song"
              className="w-24 cursor-pointer"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            accept="image/*"
            hidden
          ></input>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-24 cursor-pointer"
            ></img>
          </label>
        </div>
      </section>

      <section className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="bg-transparent outline-yellow-600 border-2 rounded-md border-green-700 p-2.5 w-[max(40vw,250px)]"
          placeholder="Type Here"
          type="text"
          required
        />
      </section>

      <section className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="bg-transparent outline-yellow-600 border-2 rounded-md border-green-700 p-2.5 w-[max(40vw,250px)]"
          placeholder="Type Here"
          type="text"
          required
        />
      </section>

      <section className="flex flex-col gap-2.5">
        <p>Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          className="bg-transparent outline-yellow-600 border-2 rounded-md border-green-700 p-2.5 w-[150px]"
        >
          <option value="none">None</option>
          {albumsData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </section>

      <button
        type="submit"
        className="text-base rounded-full bg-green-700 text-white px-6 py-2.5 cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default AddSong;
