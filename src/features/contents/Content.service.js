import { content } from "@database/index";

import {
  NotFoundException,
  UnauthorizedException,
} from "src/errors/exceptions";

export default class ContentService {
  /** @private */
  _model = content;

  get model() {
    return this._model;
  }

  /**
   * @returns {import("@prisma/client").Prisma.ContentInclude<import("@prisma/client/runtime/library").DefaultArgs>}
   */
  get include() {
    return {
      User: {
        select: {
          id: true,
          username: true,
        },
      },
    };
  }

  async getAllContents(user_id) {
    let contents = await this.model.findMany({
      select: {
        id: true,
        author_id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        User: {
          select: {
            id: true,
            username: true,
          },
        },
        Likes: {
          where: {
            user_id,
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
      orderBy: {
        createdAt: "desc",
      },
    });

    contents = contents.map((content) => ({
      ...content,
      likedByMe: content.Likes.length > 0,
    }));

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
   * @param {string} user_id
   * @param {(import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentCreateInput, import("@prisma/client").Prisma.ContentUncheckedCreateInput> & import("@prisma/client").Prisma.ContentUncheckedCreateInput) | (import("@prisma/client").Prisma.Without<import("@prisma/client").Prisma.ContentUncheckedCreateInput, import("@prisma/client").Prisma.ContentCreateInput> & import("@prisma/client").Prisma.ContentCreateInput)} data
   */
  async createContent(user_id, data) {
    const content = await this.model.create({
      data: {
        ...data,
        User: {
          connect: {
            id: user_id,
          },
        },
      },
      include: this.include,
    });

    return {
      data: content,
    };
  }

  /**
   * @param {string} user_id
   * @param {string} content_id
   * @param {Pick<import("@prisma/client").Content, "content">} content
   */
  async updateContent(user_id, content_id, content) {
    try {
      const _content = await this.model.update({
        where: { id: content_id, author_id: user_id },
        data: {
          ...content,
        },
        include: this.include,
      });

      return {
        data: _content,
      };
    } catch (err) {
      /** @type {import("@prisma/client/runtime/library").PrismaClientInitializationError | import("@prisma/client/runtime/library").PrismaClientKnownRequestError | import("@prisma/client/runtime/library").PrismaClientUnknownRequestError | import("@prisma/client/runtime/library").PrismaClientRustPanicError | import("@prisma/client/runtime/library").PrismaClientValidationError } */
      const _err = err;

      if (_err.code == "P2025") {
        throw new UnauthorizedException(
          "You don't have permission to edit this content!.",
        );
      }

      throw _err;
    }
  }

  /**
   * @param {string} user_id
   * @param {string} content_id
   */
  async deleteContentById(user_id, content_id) {
    let content = await this.model.findUnique({
      where: { id: content_id },
      include: this.include,
    });

    if (!content) {
      throw new NotFoundException(`Can't find content with id : ${content_id}`);
    }

    if (content.author_id != user_id) {
      throw new UnauthorizedException(
        "You don't have permission to delete this content!.",
      );
    }

    content = await this.model.delete({
      where: {
        id: content_id,
        author_id: user_id,
      },
    });

    return {
      data: content,
    };
  }
}
