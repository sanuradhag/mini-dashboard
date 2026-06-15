export type RootState = {
  app: Record<string, never>
}

export type ProductRating = {
  rate: number
  count: number
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
}

export type EnrichedProduct = Product & {
  discountedPrice: number
  formattedCategory: string
}

export type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export type ProductsState = {
  products: EnrichedProduct[]
  apiStatus: FetchStatus
  apiError: string | null
}
