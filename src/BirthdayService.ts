
import { CustomerRepository } from './customers/CustomerRepository.js'
import { DiscountCodeGenerator } from './discount/DiscountCodeGenerator.js'
import { ProductionEmailSender } from './email/ProductionEmailSender.js'
import { ProductionLogger } from './logger/ProductionLogger.js'

export class BirthdayService {
  private readonly customerRepository: CustomerRepository
  private readonly emailSender: ProductionEmailSender
  private readonly logger: ProductionLogger

  constructor(
    customerRepository: CustomerRepository,
    emailSender: ProductionEmailSender,
    logger: ProductionLogger,
  ) {
    this.customerRepository = customerRepository
    this.emailSender = emailSender
    this.logger = logger
  }

  greetCustomersWithBirthday(today: Date) {
    const customers = this.customerRepository.findWithBirthday(today)
    customers.forEach((customer) => {
      const discountCode = new DiscountCodeGenerator().generate()
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
