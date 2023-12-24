import { user } from "@database/index";

import {
  NotFoundException,
  UnauthorizedException,
} from "../../errors/exceptions";
import { generateApiKey } from "../../lib/auth.lib";

export default class UserService {
  /** @private */
  _model = user;

  get model() {
    return this._model;
  }

  /**
   * @returns {import("@prisma/client").Prisma.UserInclude<import("@prisma/client/runtime/library").DefaultArgs>}
   */
  get include() {
    return {};
  }

  /**
   * @param {string} id
   */
  async getUserById(id) {
    const user = await this.model.findUnique({
      where: { id },
      include: this.include,
    });

    if (!user) {
      throw new NotFoundException(`There is no user with id : ${id}`);
    }

    return {
      data: user,
    };
  }

  /**
   * @param {string} apiKey
   */
  async getUserByApiKey(apiKey) {
    const user = await this.model.findUnique({
      where: {
        api_key: apiKey,
      },
      include: this.include,
    });

    if (!user) {
      throw new UnauthorizedException("Can't find user with this API key!");
    }

    return {
      data: {
        user,
      },
    };
  }

  async createUser() {
    let user = await this.model.create({
      data: {},
      include: this.include,
    });

    user = await this.model.update({
      where: {
        id: user.id,
      },
      data: {
        api_key: generateApiKey(user.id),
      },
    });

    return {
      data: user,
    };
  }
}
