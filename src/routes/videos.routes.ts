import { Router } from "express";

import { CreateVideoController } from "../controllers/VideoController/CreateVideoController";

const videosRoutes = Router();

videosRoutes.post("/", new CreateVideoController().handle);

export { videosRoutes };
