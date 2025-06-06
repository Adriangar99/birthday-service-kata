import { Customer } from "../../src/customers/Customer";
import { CustomerRepository } from "../../src/customers/CustomerRepository";

export class WithoutCustomersRepository implements CustomerRepository {
  findWithBirthday(today: Date): Customer[] {
    return [];
  }
}