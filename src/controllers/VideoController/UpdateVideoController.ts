import { Request, Response } from "express";

import { UpdateVideoService } from "../../services/VideoServices/UpdateVideoService";

export class UpdateVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, category_id, duration } = request.body;

    const updateVideoService = new UpdateVideoService();

    const result = await updateVideoService.execute({
      id,
      name,
      description,
      category_id,
      duration,
    });

    if (result instanceof Error) {
      return response.status(400);
    }

    return response.json(result);
  }
}
