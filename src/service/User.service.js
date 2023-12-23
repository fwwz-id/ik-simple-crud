import { user } from "../database/db";

import { NotFoundException } from "../errors/exceptions";

export default class UserService {
  _model = user;

  get model() {
    return this._model;
  }

  /**
   * @param {string} id
   */
  async getUserById(id) {
    const user = await this.model.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`There is no user with id : ${id}`);
    }

    return {
      data: user,
    };
  }

  async createUser() {
    const user = await this.model.create({
      data: {},
    });

    return {
      data: user,
    };
  }
}
