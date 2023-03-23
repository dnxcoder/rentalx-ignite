import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface iPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //Bearer asdd2iojioasd09p0df9d90a

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [bearer, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "d50c073dd1a1882eeae90d9e65a814e9"
    ) as iPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) throw new AppError("User does not exists!", 401);

    next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}
