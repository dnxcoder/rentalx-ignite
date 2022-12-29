import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

class ListSpecificationService {
  private specificationRepository: ISpecificationsRepository;

  constructor(specificationRepository: ISpecificationsRepository) {
    this.specificationRepository = specificationRepository;
  }

  execute(): ISpecificationsRepository {
    return this.specificationRepository;
  }
}

export { ListSpecificationService };
