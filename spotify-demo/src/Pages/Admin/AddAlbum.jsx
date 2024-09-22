import React, { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/admin-assets/assets";

const AddAlbum = () => {
  const [image, setImage] = useState(null);
  const [colour, setColour] = useState("#121212");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const { addAlbum } = useContext(AdminContext);

  const clearForm = () => {
    setDesc("");
    setImage(null);
    setName("");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("bgColor", colour);
    await addAlbum(formData, clearForm);
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
      <header className="font-semibold text-black">ADD Album</header>
      <section className="flex flex-col gap-4">
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
      </section>

      <section className="flex flex-col gap-2.5">
        <p>Album Name</p>
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
        <p>Album Description</p>
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
        <p>Background Colour</p>
        <input
          onChange={(e) => setColour(e.target.value)}
          value={colour}
          type="color"
        />
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

export default AddAlbum;
