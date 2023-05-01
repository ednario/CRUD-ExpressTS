import { Router } from "express";

import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { GetAllCategoryController } from "../controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", new CreateCategoryController().handle);
categoriesRoutes.get("/", new GetAllCategoryController().handle);
categoriesRoutes.delete("/:id", new DeleteCategoryController().handle);
categoriesRoutes.put("/:id", new UpdateCategoryController().handle);

export { categoriesRoutes };
