import { Request, Response } from "express";

import { GetAllCategoriesService } from "../services/CategoryService/GetAllCategoriesService";

export class GetAllCategoryController {
  async handle(request: Request, response: Response) {
    const getAllCategoryService = new GetAllCategoriesService();

    const result = await getAllCategoryService.execute();

    return response.json(result);
  }
}
