import { getRepository } from "typeorm";
import { Video } from "../../entities/Video";

export class DeleteVideoService {
  async execute(id: string): Promise<void | Error> {
    const repo = getRepository(Video);

    if (!(await repo.findOne({ id }))) {
      return new Error("Categories does not exists!");
    }

    await repo.delete(id);
  }
}
