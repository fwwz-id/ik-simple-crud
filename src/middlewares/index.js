import cors from "cors";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
// import cache from "./cache.middleware";

export default class Middleware {
  /**
   * @param {import("express").Application} app
   */
  static use(app) {
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(cors());
    app.use(express.json());
    // app.use(cache);
  }
}
