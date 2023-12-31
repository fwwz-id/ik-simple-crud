import { StatusCodes } from "http-status-codes";

import UserService from "./User.service";

export default class UserController {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async create(req, res, next) {
    const user = new UserService();
    const response = await user.createUser();

    res.status(StatusCodes.CREATED).json(response);
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async show(req, res, next) {
    const _user = req.user;

    const user = new UserService();
    const response = await user.getUserByApiKey(_user.api_key);

    res.status(StatusCodes.OK).json(response);
  }
}
