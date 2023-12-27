import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import ContentController from "@features/contents/Content.controller";

const router = Router();

router.get(
  "/contents/:id/comments",
  expressAsyncHandler(ContentController.index),
);
router.delete("/comments/:id", expressAsyncHandler(ContentController.index));

export default router;
