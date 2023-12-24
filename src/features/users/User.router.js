import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import UserController from "./User.controller";

const router = Router();

router.post("/users", expressAsyncHandler(UserController.create));
router.get("/users/:id", expressAsyncHandler(UserController.show));

export default router;
