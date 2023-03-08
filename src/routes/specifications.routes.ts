import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecificattion/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/listSpecificationsController";

const speficationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

speficationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

speficationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

// speficationsRoutes.get("/", (request, response) => {
//   const listSpecifications = listSpecificationsController.handle(
//     request,
//     response
//   );
//   return response.json(listSpecifications);
// });

export { speficationsRoutes };
