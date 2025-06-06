import { EmailSender } from "../../src/email/EmailSender";

export class StalkerEmailsSender implements EmailSender {
  public calledWithEmail: string | undefined;
  public calledWithMessage: string | undefined;

  send(email: string, message: string): void {
    this.calledWithEmail = email;
    this.calledWithMessage = message;
  }
}