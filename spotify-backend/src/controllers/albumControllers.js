import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const { name, desc, bgColor } = req.body;

    const imageFile = req.files.image[0];

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColor,
      image: imageUpload.secure_url,
    };

    const album = albumModel(albumData);
    await album.save();
    res.json({ success: true, message: "Album Added" });
  } catch (error) {
    res.json({ sucess: false, message: error });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find({});
    res.json({ success: true, albums: allAlbums });
  } catch (error) {
    res.json({ sucess: false, message: error });
  }
};

const removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Album deleted" });
  } catch (error) {
    res.json({ sucess: false, message: error });
  }
};

export { addAlbum, listAlbum, removeAlbum };
