import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";
import { Request, Response } from "express";
import { Specification } from "../../entities/Specification";
import { container } from "tsyringe";

class ListSpecificationsController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<Specification[]>> {
    const listSpecificationUseCase = container.resolve(
      ListSpecificationsUseCase
    );

    const listSpecifications = await listSpecificationUseCase.execute();

    return response.json(listSpecifications);
  }
}

export { ListSpecificationsController };
