import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  description: string;
  name: string;
}

@injectable()
class ListCategoriesUseCase {
  //private categoriesRepository: ICategoriesRepository;

  // constructor(categoriesRepository: ICategoriesRepository) {

  //   this.categoriesRepository = categoriesRepository;
  // }

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
