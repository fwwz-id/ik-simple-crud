import { Router } from "express";

import ContentController from "../../../controller/v1/Content.controller";

const router = Router();

router.get("/contents", ContentController.index);

export default router;
