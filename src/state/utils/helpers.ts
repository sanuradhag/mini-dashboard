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

export function filterByTitle(
  products: EnrichedProduct[],
  query: string,
): EnrichedProduct[] {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return products
  }

  return products.filter((product) =>
    product.title.toLowerCase().includes(normalizedQuery),
  )
}

export function sortProducts(
  products: EnrichedProduct[],
  sortField: 'title' | 'price',
  sortDirection: 'asc' | 'desc',
): EnrichedProduct[] {
  const sorted = [...products].sort((a, b) => {
    const comparison =
      sortField === 'title'
        ? a.title.localeCompare(b.title)
        : a.price - b.price

    return sortDirection === 'asc' ? comparison : -comparison
  })

  return sorted
}
