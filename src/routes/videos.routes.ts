import { Router } from "express";

import { CreateVideoController } from "../controllers/VideoController/CreateVideoController";
import { GetAllVideosController } from "../controllers/VideoController/GetAllVideosController";
import { DeleteVideoController } from "../controllers/VideoController/DeleteVideoController";
import { UpdateVideoController } from "../controllers/VideoController/UpdateVideoController";

const videosRoutes = Router();

videosRoutes.post("/", new CreateVideoController().handle);
videosRoutes.get("/", new GetAllVideosController().handle);
videosRoutes.delete("/:id", new DeleteVideoController().handle);
videosRoutes.put("/:id", new UpdateVideoController().handle);

export { videosRoutes };
