declare namespace NodeJS {
  type LocalProcessEnv = Partial<{
    DATABASE_URL: string;
    NODE_ENV: "development" | "testing" | "production";
    SECRET: string;
  }>;

  interface ProcessEnv extends LocalProcessEnv {}
}
