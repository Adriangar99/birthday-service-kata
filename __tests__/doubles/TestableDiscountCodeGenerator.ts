import { DiscountCode } from "../../src/discount/DiscountCode";
import { DiscountCodeGenerator } from "../../src/discount/DiscountCodeGenerator";

export class TestableDiscountCodeGenerator implements DiscountCodeGenerator {
  generate(): DiscountCode {
    return new DiscountCode(this.generateCode())
  }

  private generateCode(): string {
    return 'TESTABLE_DISCOUNT_CODE'
  }
}