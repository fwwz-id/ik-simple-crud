import { StatusCodes } from "http-status-codes";

import ContentService from "./Content.service";

export default class ContentController {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async index(req, res, next) {
    const user = req.user;

    const content = new ContentService();
    const response = await content.getAllContents(user.id);

    res.status(StatusCodes.OK).json(response);
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async store(req, res, next) {
    const user = req.user;
    /** @type {(import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentCreateInput, import("@prisma/client").Prisma.ContentUncheckedCreateInput> & import("@prisma/client").Prisma.ContentUncheckedCreateInput) | (import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentUncheckedCreateInput, import("@prisma/client").Prisma.ContentCreateInput> & import("@prisma/client").Prisma.ContentCreateInput)} */
    const body = req.body;

    const content = new ContentService();
    const response = await content.createContent(user.id, body);

    res.status(StatusCodes.OK).json(response);
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async show(req, res, next) {
    const { id } = req.params;

    const content = new ContentService();
    const response = await content.getContentById(id);

    res.status(StatusCodes.CREATED).json(response);
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async update(req, res, next) {
    const user = req.user;
    const { id: content_id } = req.params;
    /** @type {Pick<import("@prisma/client").Content, "content">} */
    const body = req.body;

    const content = new ContentService();
    const response = await content.updateContent(user.id, content_id, body);

    res.status(StatusCodes.OK).json(response);
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async destroy(req, res, next) {
    const user = req.user;
    const { id: content_id } = req.params;

    const content = new ContentService();
    const response = await content.deleteContentById(user.id, content_id);

    res.status(StatusCodes.OK).json(response);
  }
}
