import { StatusCodes } from "http-status-codes";

import LikeService from "./Like.service";

export default class LikeController {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async destroy(req, res, next) {
    const { id } = req.params;
    const user = req.user;

    const likes = new LikeService();
    const response = await likes.unlikeContentOrComment(id, user.id);

    res.status(StatusCodes.OK).json(response);
  }
}
