import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController";

const usersRoutes = Router();

const upload = multer({
  dest: "./avatar",
});

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  upload.single("file"),
  updateUserController.handle
);

export { usersRoutes };
