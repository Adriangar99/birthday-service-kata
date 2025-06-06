import { DiscountCode } from "../../src/discount/DiscountCode";
import { DiscountCodeGenerator } from "../../src/discount/DiscountCodeGenerator";
import { ProductionDiscountCodeGenerator } from "../../src/discount/ProductionDiscountCodeGenerator";

export class NotDiscountCodeGenerator implements DiscountCodeGenerator {
  generate(): DiscountCode {
    return new DiscountCode(this.generateCode())
  }
  
  private generateCode(): string {
    return ''
  }
}