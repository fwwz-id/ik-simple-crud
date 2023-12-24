import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import ContentLikeController from "./ContentLike.controller";
import isAuthorized from "@middlewares/isAuthorized.middleware";

const router = Router();

router.post(
  "/contents/:id/likes",
  [isAuthorized],
  expressAsyncHandler(ContentLikeController.store),
);

export default router;
