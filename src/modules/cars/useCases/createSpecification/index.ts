import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  createSpecificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController, createSpecificationRepository };
