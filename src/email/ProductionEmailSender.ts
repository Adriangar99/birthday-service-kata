import { EmailSender } from "./EmailSender";

export class ProductionEmailSender implements EmailSender {
  send(email: string, message: string) {
    throw new Error(
      '🤬 You are using ProductionEmailSender in a test. It will cost lots of money $$.',
    )
  }
}
