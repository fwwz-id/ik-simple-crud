import "dotenv/config";

import prisma from "../db";

import ContentSeeder from "./Content.seeder";
import CommentSeeder from "./Comment.seeder";

const seeder = [ContentSeeder, CommentSeeder];

const Seed = async (seeders = seeder) => {
  if (!seeders.length) {
    console.log("There's no seeder to run.");
  }

  try {
    for (const seeder of seeders) {
      await seeder();
    }
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
};

Seed();
