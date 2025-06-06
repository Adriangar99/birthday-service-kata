import { DiscountCodeGenerator } from "../../src/discount/DiscountCodeGenerator";

export class NotDiscountCodeGenerator extends DiscountCodeGenerator {
  protected generateCode(): string {
    return ''
  }
}