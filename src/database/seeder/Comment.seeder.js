import { faker } from "@faker-js/faker";
import { comment, content } from "../db";

const CommentSeeder = async (size = 10) => {
  const contents = await content.findMany({});

  return Promise.all(
    [...Array(size)].map(() => {
      const content = faker.helpers.arrayElement(contents);

      const hasReplies = faker.helpers.arrayElement([true, false]);

      return comment.create({
        data: {
          content: faker.lorem.paragraphs(),
          Content: {
            connect: {
              id: content.id,
            },
          },
          ...(hasReplies && {
            replies: {
              createMany: {
                data: [...Array(faker.number.int({ min: 10, max: 100 }))].map(
                  () => ({
                    content_id: content.id,
                    content: faker.lorem.paragraph(),
                  })
                ),
              },
            },
          }),
        },
      });
    })
  );
};

export default CommentSeeder;
