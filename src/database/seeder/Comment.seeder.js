import { faker } from "@faker-js/faker";
import { comment, content, user } from "../db";

export const CommentSeeder = async (size = 10) => {
  const contents = await content.findMany({});
  const users = await user.findMany({});

  return Promise.all(
    [...Array(size)].map(() => {
      const content = faker.helpers.arrayElement(contents);
      const user = faker.helpers.arrayElement(users);

      return comment.create({
        data: {
          content: faker.lorem.paragraphs(),
          Content: {
            connect: {
              id: content.id,
            },
          },
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

export const RepliesSeeder = async () => {
  const comments = await comment.findMany({});
  const users = await user.findMany({});

  return Promise.all(
    comments.map((c) => {
      const user = faker.helpers.arrayElement(users);

      return comment.update({
        where: {
          id: c.id,
        },
        data: {
          replies: {
            create: {
              content: faker.lorem.paragraph(),
              Content: {
                connect: {
                  id: c.content_id,
                },
              },
              User: {
                connect: {
                  id: user.id,
                },
              },
              replies: {
                create: {
                  content: faker.lorem.paragraph(),
                  Content: {
                    connect: {
                      id: c.content_id,
                    },
                  },
                  User: {
                    connect: {
                      id: user.id,
                    },
                  },
                },
              },
            },
            createMany: {
              data: [...Array(faker.number.int({ min: 5, max: 100 }))].map(
                () => ({
                  content_id: c.content_id,
                  content: faker.lorem.paragraphs(),
                  author_id: user.id,
                })
              ),
            },
          },
        },
      });
    })
  );
};
