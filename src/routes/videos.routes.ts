import { Router } from "express";

import { CreateVideoController } from "../controllers/VideoController/CreateVideoController";
import { GetAllVideosController } from "../controllers/VideoController/GetAllVideosController";
import { DeleteVideoController } from "../controllers/VideoController/DeleteVideoController";

const videosRoutes = Router();

videosRoutes.post("/", new CreateVideoController().handle);
videosRoutes.get("/", new GetAllVideosController().handle);
videosRoutes.delete("/:id", new DeleteVideoController().handle);

export { videosRoutes };
