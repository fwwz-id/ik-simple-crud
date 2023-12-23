import { StatusCodes } from "http-status-codes";

import ContentService from "../../service/Content.service";

export default class ContentController {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static async index(req, res, next) {
    const content = new ContentService();
    const response = await content.getAllContents();

    res.status(StatusCodes.OK).json(response);
  }
}
