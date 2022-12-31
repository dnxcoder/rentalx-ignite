import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { ListCategoryService } from "../modules/cars/services/ListCategoryService";
import { ListSpecificationService } from "../modules/cars/services/ListSpecificationService";

const speficationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

speficationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

speficationsRoutes.get("/", (request, response) => {
  const listSpecificationService = new ListSpecificationService(
    specificationRepository
  );

  const listSpecifications = listSpecificationService.execute();

  return response.json(listSpecifications).send();
});

export { speficationsRoutes };
