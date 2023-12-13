import http from "http";
import express from "express";

import Router from "../routes";
import Middleware from "../middlewares";

const server = () => {
  const app = express();

  Middleware.use(app);
  Router.use(app);

  return new http.Server(app);
};

export default server;
