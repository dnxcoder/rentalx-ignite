// the role of this file is to instance all the classes responsible
// for listing the specifications for the user.
// we will start getting the instance of specifications
// next we use the instance of specifications for instancing the list useCase
// next we use the instance of list useCase for instancing the Controller
// next we return the controller

import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./listSpecificationsController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

const specificationsRepository = SpecificationRepository.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
