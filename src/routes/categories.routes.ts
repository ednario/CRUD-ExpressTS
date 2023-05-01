import { Router } from "express";

import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { GetAllCategoryController } from "../controllers/GetAllCategoriesController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", new CreateCategoryController().handle);
categoriesRoutes.get("/", new GetAllCategoryController().handle);

export { categoriesRoutes };
