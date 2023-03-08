import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { Specification } from "../../entities/Specification";
import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  // private specificationRepository: SpecificationRepository;

  // constructor(specificationRepository: SpecificationRepository) {
  //   this.specificationRepository = specificationRepository;
  // }

  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  execute(): Promise<Specification[]> {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationsUseCase };
