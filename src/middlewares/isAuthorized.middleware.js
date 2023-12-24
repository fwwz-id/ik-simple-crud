import { UnauthorizedException } from "../errors/exceptions";

import UserService from "@features/users/User.service";

const isAuthorized =
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async (req, res, next) => {
    try {
      const apiKey = req.headers["x-api-key"];

      if (!apiKey) {
        throw new UnauthorizedException("No API Key found!");
      }

      const {
        data: { user },
      } = await new UserService().getUserByApiKey(apiKey);

      req.user = user;

      next();
    } catch (error) {
      next(error); // Pass the error to the error handler
    }
  };

export default isAuthorized;
