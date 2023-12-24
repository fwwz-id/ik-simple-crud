import { content } from "@database/index";

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
      select: {
        id: true,
        author_id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        User: true,
        Comments: {
          include: {
            User: true,
            replies: true,
          },
        },
        _count: {
          select: {
            Comments: {
              where: {},
            },
            Likes: {
              where: {},
            },
          },
        },
      },
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
