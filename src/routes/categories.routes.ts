import { Router } from "express";

import { CreateCategoryController } from "../controllers/CategoryControllers/CreateCategoryController";
import { GetAllCategoryController } from "../controllers/CategoryControllers/GetAllCategoriesController";
import { DeleteCategoryController } from "../controllers/CategoryControllers/DeleteCategoryController";
import { UpdateCategoryController } from "../controllers/CategoryControllers/UpdateCategoryController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", new CreateCategoryController().handle);
categoriesRoutes.get("/", new GetAllCategoryController().handle);
categoriesRoutes.delete("/:id", new DeleteCategoryController().handle);
categoriesRoutes.put("/:id", new UpdateCategoryController().handle);

export { categoriesRoutes };
