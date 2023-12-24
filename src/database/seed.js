import "dotenv/config";

import prisma from ".";

import ContentSeeder from "@features/contents/Content.seeder";
import {
  CommentSeeder,
  RepliesSeeder,
} from "@features/comments/Comment.seeder";
import UserSeeder from "@features/users/User.seeder";
import LikeSeeder from "@features/likes/Like.seeder";

const seeder = [
  UserSeeder,
  ContentSeeder,
  CommentSeeder,
  RepliesSeeder,
  LikeSeeder,
];

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
