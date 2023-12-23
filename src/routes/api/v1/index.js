import { Router } from "express";

import CommentRouter from "./Comment.route";
import ContentRouter from "./Content.router";
import UserRouter from "./User.router";

const router = Router();

const version = "/v1";

router.use(version, CommentRouter);
router.use(version, ContentRouter);
router.use(version, UserRouter);

export default router;
