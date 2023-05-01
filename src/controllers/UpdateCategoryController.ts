import { Request, Response } from "express";

import { UpdateCategoryService } from "../services/CategoryService/UpdateCategoryService";

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description } = request.body;

    const updateCategoryService = new UpdateCategoryService();

    const result = await updateCategoryService.execute({
      id,
      name,
      description,
    });

    if (result instanceof Error) {
      return response.status(400);
    }

    return response.json(result);
  }
}
