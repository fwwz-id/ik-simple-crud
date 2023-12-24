import CommentRouter from "@features/comments/Comment.router.js";
import ContentRouter from "@features/contents/Content.router.js";
import ContentLikeRouter from "@features/content-likes/ContentLike.router";
import LikeRouter from "@features/likes/Like.router";
import UserRouter from "@features/users/User.router.js";

export default class Router {
  /** @param {import("express").Application} app */
  static use(app) {
    app.use("/api/v1", CommentRouter);
    app.use("/api/v1", ContentRouter);
    app.use("/api/v1", ContentLikeRouter);
    app.use("/api/v1", LikeRouter);
    app.use("/api/v1", UserRouter);
  }
}
