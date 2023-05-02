import { Router } from "express";

import { CreateVideoController } from "../controllers/VideoController/CreateVideoController";
import { GetAllVideosController } from "../controllers/VideoController/GetAllVideosController";

const videosRoutes = Router();

videosRoutes.post("/", new CreateVideoController().handle);
videosRoutes.get("/", new GetAllVideosController().handle);

export { videosRoutes };
