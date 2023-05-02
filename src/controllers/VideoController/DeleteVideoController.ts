import { Request, Response } from "express";

import { DeleteVideoService } from "../../services/VideoServices/DeleteVideoService";

export class DeleteVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteVideoService = new DeleteVideoService();

    const result = await deleteVideoService.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}
