import { CategoriesRepository } from "../repositories/CategoriesRepository";

class ListCategoryService {
  private categoryRepository: CategoriesRepository;

  constructor(categoryRepository: CategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute(): CategoriesRepository {
    return this.categoryRepository;
  }
}

export { ListCategoryService };
