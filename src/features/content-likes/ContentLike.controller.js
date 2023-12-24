import { StatusCodes } from "http-status-codes";

import LikeService from "@features/likes/Like.service";

export default class ContentLikeController {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async store(req, res, next) {
    const { id: content_id } = req.params;
    const user = req.user;

    const likes = new LikeService();
    const response = await likes.likeContent(content_id, user.id);

    res.status(StatusCodes.CREATED).json(response);
  }
}
