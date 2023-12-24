import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "pretty",
  log: [{ emit: "event", level: "query" }],
});

if (
  process.env.NODE_ENV == "development" ||
  process.env.NODE_ENV == "testing"
) {
  prisma.$on("query", ({ query, params, duration, timestamp }) => {
    console.log(
      `\x1b[33m[QUERY]\x1b[0m: ${query}, \x1b[33m[PARAMS]\x1b[0m: ${params}, \x1b[35m[DURATION]\x1b[0m: ${duration}ms, \x1b[35m[TIMESTAMP]\x1b[0m: ${timestamp}`
    );
  });
}

export const comment = prisma.comment;
export const content = prisma.content;
export const like = prisma.like;
export const user = prisma.user;

export default prisma;
