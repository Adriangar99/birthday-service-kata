import { Logger } from "../../src/logger/Logger";

export class StalkerLogger implements Logger {
  public calledWithLevel: string | undefined;
  public calledWithMessage: string | undefined;


  log(level: string, message: string): void {
    this.calledWithLevel = level;
    this.calledWithMessage = message;
  }
}