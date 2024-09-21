import express from "express";

import upload from "../middleware/multer.js";
import {
  addAlbum,
  listAlbum,
  removeAlbum,
} from "../controllers/albumControllers.js";

const albumRouter = express.Router();

albumRouter.post(
  "/add",
  upload.fields([{ name: "image", maxCount: 1 }]),
  addAlbum
);

albumRouter.get("/list", listAlbum);

albumRouter.delete("/:id", removeAlbum);

export default albumRouter;
