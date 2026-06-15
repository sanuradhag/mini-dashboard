import type { Product } from '../../src/state/utils/types'

export const mockApiProducts: Product[] = [
  {
    id: 1,
    title: 'Alpha Widget',
    price: 100,
    description: 'Alpha description',
    category: 'electronics',
    image: 'https://example.com/alpha.jpg',
    rating: { rate: 4.5, count: 10 },
  },
  {
    id: 2,
    title: 'Beta Gadget',
    price: 50,
    description: 'Beta description',
    category: 'jewelery',
    image: 'https://example.com/beta.jpg',
    rating: { rate: 3, count: 5 },
  },
  {
    id: 3,
    title: 'Charlie Device',
    price: 200,
    description: 'Charlie description',
    category: 'mens clothing',
    image: 'https://example.com/charlie.jpg',
    rating: { rate: 5, count: 20 },
  },
]
