import { Customer } from "../../src/customers/Customer";
import { CustomerRepository } from "../../src/customers/CustomerRepository";

export class WithOnlyOneCustomerRepository implements CustomerRepository {
  findWithBirthday(today: Date): Customer[] {
    return [new Customer("John Doe", "john@example.com", new Date(1990, 0, 1))];
  }
}