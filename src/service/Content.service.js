import { content } from "../database/db";

export default class ContentService {
  _model = content;

  get model() {
    return this._model;
  }

  /**
   * @returns {import("@prisma/client").Prisma.ContentInclude<import("@prisma/client/runtime/library").DefaultArgs>}
   */
  get include() {
    return {
      Comments: {
        include: {
          replies: true,
        },
      },
    };
  }

  async getAllContents() {
    const contents = await this.model.findMany({
      include: this.include,
    });

    return {
      data: contents,
    };
  }

  /**
   * @param {string} id
   */
  async getContentById(id) {
    const content = await this.model.findUnique({
      where: { id },
      include: this.include,
    });

    return {
      data: content,
    };
  }

  /**
   * @param {(import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentCreateInput, import("@prisma/client").Prisma.ContentUncheckedCreateInput> & import("@prisma/client").Prisma.ContentUncheckedCreateInput) | (import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentUncheckedCreateInput, import("@prisma/client").Prisma.ContentCreateInput> & import("@prisma/client").Prisma.ContentCreateInput)} data
   */
  async createContent(data) {
    const contents = await this.model.create({
      data,
      include: this.include,
    });

    return {
      data: contents,
    };
  }
}
