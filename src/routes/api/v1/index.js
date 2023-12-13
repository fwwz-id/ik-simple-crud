import { Router } from "express";

import ContentRouter from "./Content.router";

const router = Router();

const version = "/v1";

router.use(version, ContentRouter);


export default router;
