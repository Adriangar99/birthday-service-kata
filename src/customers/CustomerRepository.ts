import { Customer } from "./Customer";

export interface CustomerRepository {
  findWithBirthday(today: Date): Customer[]
}