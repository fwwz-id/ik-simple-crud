import { faker } from "@faker-js/faker";

import ContentService from "./Content.service";
import UserService from "@features/users/User.service";

const ContentSeeder = async (size = 10) => {
  const content_service = new ContentService();
  const user_service = new UserService();

  const users = await user_service.model.findMany({});

  return Promise.all(
    [...Array(size)].map(() => {
      const user = faker.helpers.arrayElement(users);

      return content_service.createContent({
        content: faker.lorem.paragraphs(),
        User: {
          connect: {
            id: user.id,
          },
        },
      });
    })
  );
};

export default ContentSeeder;
