import { Request, Response } from "express";

import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {
    this.createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationsRepository
    );
  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateSpecificationController };
