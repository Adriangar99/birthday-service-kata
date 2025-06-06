import { Customer } from "../../src/customers/Customer";
import { CustomerRepository } from "../../src/customers/CustomerRepository";

export class WithCustomersRepository implements CustomerRepository {
  findWithBirthday(today: Date): Customer[] {
    return [
      new Customer("John Doe", "john@example.com", new Date("1990-02-14")),
      new Customer("Jane Doe", "jane@example.com", new Date("2005-02-14")),
    ];
  }
}