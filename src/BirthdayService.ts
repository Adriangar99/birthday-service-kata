
import { CustomerRepository } from './customers/CustomerRepository.js'
import { DiscountCodeGenerator } from './discount/DiscountCodeGenerator.js'
import { EmailSender } from './email/EmailSender.js'
import { Logger } from './logger/Logger.js'

export class BirthdayService {
  private readonly customerRepository: CustomerRepository
  private readonly emailSender: EmailSender
  private readonly logger: Logger
  private readonly discountCodeGenerator: DiscountCodeGenerator

  constructor(
    customerRepository: CustomerRepository,
    emailSender: EmailSender,
    logger: Logger,
    discountCodeGenerator: DiscountCodeGenerator,
  ) {
    this.customerRepository = customerRepository
    this.emailSender = emailSender
    this.logger = logger
    this.discountCodeGenerator = discountCodeGenerator
  }

  greetCustomersWithBirthday(today: Date) {
    const customers = this.customerRepository.findWithBirthday(today)
    customers.forEach((customer) => {
      const discountCode = this.discountCodeGenerator.generate()
      const template =
        'Happy birthday, {name}! Here is your discount code: {discount}'.replace(
          '{discount}',
          discountCode.getCode(),
        )
      customer.sendEmail(template, this.emailSender)
      this.logger.log('INFO', customer.fillWithEmail('Email sent to {email}'))
    })
  }
}
