import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

export default class Middleware {
  /**
   * @param {import("express").Application} app
   */
  static use(app) {
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(cors());
  }
}
