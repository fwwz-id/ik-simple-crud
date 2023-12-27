import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import ContentController from "./Content.controller";
import isAuthorized from "@middlewares/isAuthorized.middleware";

const router = Router();

router.get(
  "/contents",
  isAuthorized,
  expressAsyncHandler(ContentController.index),
);
router.post(
  "/contents",
  isAuthorized,
  expressAsyncHandler(ContentController.store),
);

router.get("/contents/:id", expressAsyncHandler(ContentController.show));
router.patch(
  "/contents/:id",
  isAuthorized,
  expressAsyncHandler(ContentController.update),
);
router.delete(
  "/contents/:id",
  isAuthorized,
  expressAsyncHandler(ContentController.destroy),
);

export default router;
