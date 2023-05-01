import { Router } from "express";

import { CreateCategoryController } from "../controllers/CreateCategoryController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", new CreateCategoryController().handle);

export { categoriesRoutes };
