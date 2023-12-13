import ApiRouter from "./api";

export default class Router {
  /** @param {import("express").Application} app */
  static use(app) {
    app.use(ApiRouter);
  }
}
