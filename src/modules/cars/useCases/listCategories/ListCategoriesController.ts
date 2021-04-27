import { Request, Response } from "express";

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = new ListCategoriesUseCase(
      categoriesRepository
    );
  }

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoryController };
