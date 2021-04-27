import { Request, Response } from "express";

import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationsRepository.getInstance();

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {
    this.listSpecificationsUseCase = new ListSpecificationsUseCase(
      specificationRepository
    );
  }

  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationsUseCase.execute();
    return response.json(all);
  }
}

export { ListSpecificationsController };
