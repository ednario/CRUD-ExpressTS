import { Request, Response } from "express";

import { GetAllVideosService } from "../../services/VideoServices/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const getAllVideosService = new GetAllVideosService();

    const videos = await getAllVideosService.execute();
    return response.json(videos);
  }
}
