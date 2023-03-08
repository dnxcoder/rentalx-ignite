import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, name } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );
    
    await createSpecificationUseCase.execute({ description, name });

    return response.send().status(201);
  }
}

export { CreateSpecificationController };
