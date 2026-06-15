export type RootState = {
  products: ProductsState
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

export type SortField = 'title' | 'price'

export type SortDirection = 'asc' | 'desc'

export type ProductsState = {
  products: EnrichedProduct[]
  apiStatus: FetchStatus
  apiError: string | null
  searchQuery: string
  sortField: SortField
  sortDirection: SortDirection
  selectedProductId: number | null
}
