import "dotenv/config";

import prisma from "../db";

import ContentSeeder from "./Content.seeder";
import { CommentSeeder, RepliesSeeder } from "./Comment.seeder";
import UserSeeder from "./User.seeder";

const seeder = [UserSeeder, ContentSeeder, CommentSeeder, RepliesSeeder];

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
