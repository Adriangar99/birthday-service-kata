import { DiscountCode } from "../../src/discount/DiscountCode";
import { DiscountCodeGenerator } from "../../src/discount/DiscountCodeGenerator";

export class TestableDiscountCodeGenerator implements DiscountCodeGenerator {
  private code: string;

  constructor(code: string) {
    this.code = code;
  }


  generate(): DiscountCode {
    return new DiscountCode(this.generateCode())
  }

  private generateCode(): string {
    return this.code
  }
}