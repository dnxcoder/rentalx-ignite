import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
