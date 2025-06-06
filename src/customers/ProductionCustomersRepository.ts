import { Customer } from './Customer.js'
import { CustomerRepository } from './CustomerRepository.js'

export class ProductionCustomersRepository implements CustomerRepository {
  private readonly customers: Customer[]

  constructor(customers: Customer[]) {
    this.customers = customers
  }

  findWithBirthday(today: Date): Customer[] {
    throw new Error(
      '🤦🏽‍♀️ You are using ProductionCustomerRepository in a test. It will mess up our data.',
    )
  }
}
