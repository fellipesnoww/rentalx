import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ICategoriesRepository, ICreateSpecificationDTO };
