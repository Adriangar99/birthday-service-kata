import { EmailSender } from "../../src/email/EmailSender";

export class CountingEmailsSender implements EmailSender {
  public hasBeenCalledTimes = 0;

  send(email: string, message: string): void {
    this.hasBeenCalledTimes++;
  }
}