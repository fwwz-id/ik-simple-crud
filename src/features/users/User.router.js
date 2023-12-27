import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import UserController from "./User.controller";
import isAuthorized from "@middlewares/isAuthorized.middleware";

const router = Router();

router.post("/users", expressAsyncHandler(UserController.create));

router.get("/users", isAuthorized, expressAsyncHandler(UserController.show));

export default router;
