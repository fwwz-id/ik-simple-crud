import { faker } from "@faker-js/faker";
import { content } from "../db";

const ContentSeeder = async (size = 10) => {
  return Promise.all(
    [...Array(size)].map(() => {
      return content.create({
        data: {
          content: faker.lorem.paragraphs(),
        },
      });
    })
  );
};

export default ContentSeeder;
