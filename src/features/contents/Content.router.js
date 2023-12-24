import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import ContentController from "./Content.controller";

const router = Router();

router.get("/contents", expressAsyncHandler(ContentController.index));
router.get("/contents/:id", expressAsyncHandler(ContentController.show));

export default router;
