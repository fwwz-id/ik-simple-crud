import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import ContentController from "../../../controller/v1/Content.controller";

const router = Router();

router.patch("/comments/:id", expressAsyncHandler(ContentController.index));
router.delete("/comments/:id", expressAsyncHandler(ContentController.index));

export default router;
