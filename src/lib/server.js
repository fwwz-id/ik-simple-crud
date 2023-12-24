import http from "http";
import express from "express";

import Router from "./routes";
import Middleware from "@middlewares";
import ExceptionHandler from "../errors";

const server = () => {
  const app = express();

  Middleware.use(app);
  Router.use(app);
  ExceptionHandler.use(app);

  return new http.Server(app);
};

export default server;
