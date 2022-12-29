import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
//import { PostgressCategoriesRepository } from "../modules/cars/repositories/PostgressCategoriesRepository";
//import { CreateCategoryService } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";
//import { ListCategoryService } from "../modules/cars/services/ListCategoryService";

const categoriesRoutes = Router();
//const categoriesRepository = new CategoriesRepository();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {});

export { categoriesRoutes };
