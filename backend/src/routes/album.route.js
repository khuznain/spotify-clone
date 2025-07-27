import { Router } from "express";
import { getAlbums, getAlbumById } from "../controllers/album.controller.js";

const router = Router();

router.get("/", getAlbums);
router.get("/:id", getAlbumById);

export default router;
