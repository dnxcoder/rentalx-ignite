import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class ListCategoryService {
  private categoryRepository: ICategoriesRepository;

  constructor(categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute(): ICategoriesRepository {
    return this.categoryRepository;
  }
}

export { ListCategoryService };
