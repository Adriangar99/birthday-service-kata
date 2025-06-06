import { DiscountCode } from "./DiscountCode";

export interface DiscountCodeGenerator {
  generate(): DiscountCode
}