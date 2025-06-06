import { DiscountCode } from './DiscountCode.js'
import { DiscountCodeGenerator } from './DiscountCodeGenerator.js'

export class ProductionDiscountCodeGenerator implements DiscountCodeGenerator {
  generate(): DiscountCode {
    return new DiscountCode(this.generateCode())
  }

  private generateCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let discountCode = ''
    for (let i = 0; i < 6; i++) {
      discountCode += characters.charAt(
        Math.floor(Math.random() * characters.length),
      )
    }
    return discountCode
  }
}
