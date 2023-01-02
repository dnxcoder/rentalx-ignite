import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecificattion";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const speficationsRoutes = Router();

speficationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

speficationsRoutes.get("/", (request, response) => {
  const listSpecifications = listSpecificationsController.handle(
    request,
    response
  );
  return response.json(listSpecifications);
});

export { speficationsRoutes };
