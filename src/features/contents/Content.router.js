import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import ContentController from "./Content.controller";
import isAuthorized from "@middlewares/isAuthorized.middleware";

const router = Router();

router.get("/contents", expressAsyncHandler(ContentController.index));
router.get("/contents/:id", expressAsyncHandler(ContentController.show));

router.post(
  "/contents/:id/likes",
  [isAuthorized],
  expressAsyncHandler(ContentController.index)
);
router.delete(
  "/contents/:content_id/likes/:like_id",
  [isAuthorized],
  expressAsyncHandler(ContentController.index)
);

export default router;
