import { faker } from "@faker-js/faker";
import { content, user } from "../../database";

const ContentSeeder = async (size = 10) => {
  const users = await user.findMany({});

  return Promise.all(
    [...Array(size)].map(() => {
      const user = faker.helpers.arrayElement(users);

      return content.create({
        data: {
          content: faker.lorem.paragraphs(),
          User: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    })
  );
};

export default ContentSeeder;
