import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { PostgressCategoriesRepository } from "../modules/cars/repositories/PostgressCategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";
import { ListCategoryService } from "../modules/cars/services/ListCategoryService";

const categoriesRoutes = Router();
//const categoriesRepository = new CategoriesRepository();
const categoriesRepository = new PostgressCategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const listCategoryService = new ListCategoryService(categoriesRepository);

  return response.json(listCategoryService.execute());
});

export { categoriesRoutes };
