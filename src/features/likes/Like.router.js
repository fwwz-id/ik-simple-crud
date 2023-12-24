import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import LikeController from "./Like.controller";
import isAuthorized from "@middlewares/isAuthorized.middleware";

const router = Router();

router.delete(
  "/likes/:id",
  [isAuthorized],
  expressAsyncHandler(LikeController.destroy),
);

export default router;
