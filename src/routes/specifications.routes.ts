import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecificattion/CreateSpecificationController";

const speficationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new CreateSpecificationController();

speficationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

// speficationsRoutes.get("/", (request, response) => {
//   const listSpecifications = listSpecificationsController.handle(
//     request,
//     response
//   );
//   return response.json(listSpecifications);
// });

export { speficationsRoutes };
