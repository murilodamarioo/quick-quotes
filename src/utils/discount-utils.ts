export function calculateDiscount(price: number, discountPct: number) {
  const discountValue = price * (discountPct / 100)
  const total = price - discountValue

  return { discountValue, total }
}