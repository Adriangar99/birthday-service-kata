import { Logger } from "../../src/logger/Logger";

export class NotLogger implements Logger {
  log(level: string, message: string): void {
    // Do nothing
  }
}