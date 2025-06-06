import { Logger } from "../../src/logger/Logger";

export class CountingLogger implements Logger {
  public hasBeenCalledTimes = 0;

  log(level: string, message: string): void {
    this.hasBeenCalledTimes++;
  }
}
