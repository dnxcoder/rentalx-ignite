import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  //inserting values to the properties of object category
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  return response.status(201).json({ category });
});

export { categoriesRoutes };
