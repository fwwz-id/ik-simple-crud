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

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static async create(req, res, next) {
    /** @type {(import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentCreateInput, import("@prisma/client").Prisma.ContentUncheckedCreateInput> & import("@prisma/client").Prisma.ContentUncheckedCreateInput) | (import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentUncheckedCreateInput, import("@prisma/client").Prisma.ContentCreateInput> & import("@prisma/client").Prisma.ContentCreateInput)} */
    const body = req.body;

    const content = new ContentService();
    const response = await content.createContent(body);

    res.status(StatusCodes.OK).json(response);
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static async show(req, res, next) {
    const { id } = req.params;

    const content = new ContentService();
    const response = await content.getContentById(id);

    res.status(StatusCodes.OK).json(response);
  }
}
