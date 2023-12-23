declare namespace NodeJS {
  type LocalProcessEnv = Partial<{
    DATABASE_URL: string;
    PORT: number;
    NODE_ENV: "development" | "testing" | "production";
  }>;

  interface ProcessEnv extends LocalProcessEnv {}
}
