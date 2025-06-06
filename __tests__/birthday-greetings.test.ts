import { describe, it } from 'vitest'
import {BirthdayService} from "../src/BirthdayService";
import {ProductionEmailSender} from "../src/email/ProductionEmailSender";
import {ProductionLogger} from "../src/logger/ProductionLogger";
import {Customer} from "../src/customers/Customer";
import { ProductionCustomersRepository } from '../src/customers/ProductionCustomersRepository';


/*
 * README
 * Exercise:
 * We have a BirthdayService that runs every day via a cron job
 *
 *  It greets customers with has birthday on that day.
 *  It generates a discount code for them.
 *  It sends an email to them with the discount code.
 *  It logs the email sent.
 *
 * You work is to write the required tests for this functionality.
 * You probably will need to modify the code to make it testable.
 * Use different test doubles for the dependencies.
 *
 * Start by running the test below and fixing the errors.
 * Add assertions to the test that matches the intent of the test.
 *
 *
 * Maybe you need to apply some refactorings to make the code testable in line with the Small Safe Steps workshop.
 *
 *   ITERATION 2 (Always green!)

 * Enrich the exercise by adding more tests:
 *
 * * Ensure that no email is sent to customer not having birthday today
 * * Make a test to ensure that the service fails gracefully if the email sending fails
 * * Make a test to ensure that the service fails gracefully if the repository fails
 *
 *
 * Ensure the email is sent with the correct message
 * 
 * */

describe('Birthday greetings', () => {
  it('does not send greeting emails if no customer has birthday today', () => {
    const service = new BirthdayService(
      new ProductionCustomersRepository([]),
      new ProductionEmailSender(),
      new ProductionLogger(),
    )
    service.greetCustomersWithBirthday(new Date())

    // TODO: add assert
  })

  it('sends greeting emails to all customers with birthday today', () => {
    const service = new BirthdayService(
      new ProductionCustomersRepository([
        new Customer('John Doe', 'john@example.com', new Date('1990-02-14')),
        new Customer('Jane Doe', 'jane@example.com', new Date('2005-02-14')),
      ]),
      new ProductionEmailSender(),
      new ProductionLogger(),
    )

    service.greetCustomersWithBirthday(new Date())

    // TODO: add assert
  })

  it.todo("sends a message with the discount code")
})
