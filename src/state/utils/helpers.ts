import type { EnrichedProduct, Product } from './types'

function formatCategory(category: string): string {
  return category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function transformProduct(product: Product): EnrichedProduct {
  return {
    ...product,
    discountedPrice: Math.round(product.price * 0.9 * 100) / 100,
    formattedCategory: formatCategory(product.category),
  }
}

export function transformProducts(products: Product[]): EnrichedProduct[] {
  return products.map(transformProduct)
}
