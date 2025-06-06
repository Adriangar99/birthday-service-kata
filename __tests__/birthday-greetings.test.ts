import { describe, expect, it } from 'vitest'
import {BirthdayService} from "../src/BirthdayService";
import {ProductionEmailSender} from "../src/email/ProductionEmailSender";
import {ProductionLogger} from "../src/logger/ProductionLogger";
import {Customer} from "../src/customers/Customer";
import { ProductionCustomersRepository } from '../src/customers/ProductionCustomersRepository';
import { WithoutCustomersRepository } from './doubles/WithoutCustomersRepository';
import { CountingEmailsSender } from './doubles/NotSendingEmailsSender';
import { NotLogger } from './doubles/NotLogger';
import { WithCustomersRepository } from './doubles/WithCustomersRepository';
import { CountingLogger } from './doubles/CountingLogger';
import { WithOnlyOneCustomerRepository } from './doubles/WithOnlyOneCustomerRepository';
import { StalkerLogger } from './doubles/ConsoleLogger';
import { NotDiscountCodeGenerator } from './doubles/NotDiscountCodeGenerator';
import { TestableDiscountCodeGenerator } from './doubles/TestableDiscountCodeGenerator';
import { StalkerEmailsSender } from './doubles/StalkerEmailsSender';


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
    const TODAY = new Date("2025-02-14")
    const customerRepository = new WithoutCustomersRepository()
    const emailSender = new CountingEmailsSender()
    const logger = new NotLogger()
    const discountCodeGenerator = new NotDiscountCodeGenerator()

    const service = new BirthdayService(
      customerRepository,
      emailSender,
      logger,
      discountCodeGenerator
    )
    service.greetCustomersWithBirthday(TODAY)

    expect(emailSender.hasBeenCalledTimes).toBe(0)
  })

  it('sends greeting emails to all customers with birthday today', () => {
    const TODAY = new Date("2025-02-14")
    const customerRepository = new WithCustomersRepository()
    const emailSender = new CountingEmailsSender()
    const logger = new NotLogger()
    const discountCodeGenerator = new NotDiscountCodeGenerator()

    const service = new BirthdayService(
      customerRepository,
      emailSender,
      logger,
      discountCodeGenerator
    )

    service.greetCustomersWithBirthday(TODAY)

    expect(emailSender.hasBeenCalledTimes).toBe(2)
  })

  it("sends the logs of the email sent", () => {
    const TODAY = new Date("2025-02-14")
    const customerRepository = new WithCustomersRepository()
    const emailSender = new CountingEmailsSender()
    const logger = new CountingLogger()
    const discountCodeGenerator = new NotDiscountCodeGenerator()


    const service = new BirthdayService(
      customerRepository,
      emailSender,
      logger,
      discountCodeGenerator
    )

    service.greetCustomersWithBirthday(TODAY)

    expect(logger.hasBeenCalledTimes).toBe(2)
  })

  it("sends the log of the email sent with the correct message", () => {
    const TODAY = new Date("2025-02-14")
    const customerRepository = new WithOnlyOneCustomerRepository()
    const emailSender = new CountingEmailsSender()
    const logger = new StalkerLogger()
    const discountCodeGenerator = new NotDiscountCodeGenerator()

    const service = new BirthdayService(
      customerRepository,
      emailSender,
      logger,
      discountCodeGenerator
    )

    service.greetCustomersWithBirthday(TODAY)

    expect(logger.calledWithLevel).toBe('INFO')
    expect(logger.calledWithMessage).toBe('Email sent to john@example.com')
  })

  it("sends a message with the discount code", () => {
    const TODAY = new Date("2025-02-14")
    const customerRepository = new WithOnlyOneCustomerRepository()
    const emailSender = new StalkerEmailsSender()
    const logger = new StalkerLogger()
    const discountCodeGenerator = new TestableDiscountCodeGenerator()

    const service = new BirthdayService(
      customerRepository,
      emailSender,
      logger,
      discountCodeGenerator
    )

    service.greetCustomersWithBirthday(TODAY)

    expect(emailSender.calledWithMessage).contains("TESTABLE_DISCOUNT_CODE")
  })
})
