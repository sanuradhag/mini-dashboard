import type { Product } from '../state/utils/types'
import { PRODUCTS_ENDPOINT } from '../utils/constants'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_ENDPOINT)

  if(!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return response.json()
}
