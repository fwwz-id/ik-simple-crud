import { faker } from "@faker-js/faker";

import { comment } from "@database/index";

import ContentService from "@features/contents/Content.service";
import UserService from "@features/users/User.service";

const LikeSeeder = async () => {
  const content_service = new ContentService();
  const user_service = new UserService();

  const comments = await comment.findMany({});
  const contents = await content_service.model.findMany({});
  const users = await user_service.model.findMany({
    select: { id: true },
  });

  const content_likes = contents.map(async (content) => {
    return await content_service.model.update({
      where: {
        id: content.id,
      },
      data: {
        Likes: {
          createMany: {
            data: faker.helpers
              .arrayElements(users)
              .map((user) => ({ user_id: user.id })),
          },
        },
      },
    });
  });

  const comment_likes = comments.map(async (_comment) => {
    return await comment.update({
      where: {
        id: _comment.id,
      },
      data: {
        Likes: {
          createMany: {
            data: faker.helpers
              .arrayElements(users)
              .map((user) => ({ user_id: user.id })),
          },
        },
      },
    });
  });

  return Promise.all([...content_likes, ...comment_likes]);
};

export default LikeSeeder;
