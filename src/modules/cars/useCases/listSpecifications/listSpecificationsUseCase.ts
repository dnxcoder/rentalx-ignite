import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { Specification } from "../../model/Specification";

class ListSpecificationsUseCase {
  private specificationRepository: SpecificationRepository;

  constructor(specificationRepository: SpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationsUseCase };
