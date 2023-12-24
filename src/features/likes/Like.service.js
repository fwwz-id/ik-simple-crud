import { like } from "@database/index";

export default class LikeService {
  /** @private */
  _model = like;

  get model() {
    return this._model;
  }

  /**
   * @param {string} content_id
   * @param {string} user_id
   */
  async likeContent(content_id, user_id) {
    const like = await this.model.create({
      data: {
        Content: {
          connect: {
            id: content_id,
          },
        },
        User: {
          connect: {
            id: user_id,
          },
        },
      },
    });

    return {
      data: {
        like,
      },
    };
  }

  /**
   * @param {string} like_id
   */
  async unlikeContentOrComment(like_id, user_id) {
    const like = await this.model.delete({
      where: {
        id: like_id,
        user_id,
      },
    });

    return {
      data: {
        like,
      },
    };
  }
}
