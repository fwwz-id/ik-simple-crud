import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import ContentController from "../../../controller/v1/Content.controller";

const router = Router();

router.get("/contents", expressAsyncHandler(ContentController.index));

export default router;
