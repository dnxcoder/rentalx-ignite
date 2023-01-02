import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";
import { Request, Response } from "express";

class ListSpecificationsController {
  private listSpecificationsUseCase: ListSpecificationsUseCase;

  constructor(listSpecificationUseCase: ListSpecificationsUseCase) {
    this.listSpecificationsUseCase = listSpecificationUseCase;
  }

  handle(request: Request, response: Response): Response {
    const listSpecifications = this.listSpecificationsUseCase.execute();
    return response.json(listSpecifications);
  }
}

export { ListSpecificationsController };
