import { StatusCodes } from "http-status-codes";

import UserService from "../../service/User.service";

export default class UserController {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
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
  static async show(req, res, next) {
    const { id } = req.params;

    const user = new UserService();
    const response = await user.getUserById(id);

    res.status(StatusCodes.OK).json(response);
  }
}
