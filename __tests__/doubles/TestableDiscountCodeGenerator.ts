import { DiscountCodeGenerator } from "../../src/discount/DiscountCodeGenerator";

export class TestableDiscountCodeGenerator extends DiscountCodeGenerator {
  protected generateCode(): string {
    return 'TESTABLE_DISCOUNT_CODE'
  }
}