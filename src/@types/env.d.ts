import type { EnvSchema } from "../env-checker";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchema { }
  }
}
