import { User } from "@prisma/client";

declare namespace NodeJS {
  type LocalProcessEnv = Partial<{
    DATABASE_URL: string;
    NODE_ENV: "development" | "testing" | "production";
    SECRET: string;
  }>;

  interface ProcessEnv extends LocalProcessEnv {}
}

declare global {
  declare module "express-serve-static-core" {
    export interface Request {
      user?: User;
    }
  }
}
