import { DiscountCode } from './DiscountCode.js'

export class DiscountCodeGenerator {
  generate(): DiscountCode {
    return new DiscountCode(this.generateCode())
  }

  protected generateCode(): string {
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
