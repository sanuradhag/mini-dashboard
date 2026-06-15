import { afterEach, describe } from 'vitest'

import { runTestCases } from './helpers/run-test-case'
import {
  ProductListTestCases,
} from './product-list.testcases'
import { FilterTestCases } from './filter-products.testcases'
import { ProductDetailTestCase } from './product-details.testcases'
import { SortTestCases } from './sort-products.testcases'

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('Product list', () => {
  runTestCases(ProductListTestCases)
})

describe('Filter', () => {
  runTestCases(FilterTestCases)
})

describe('Sort', () => {
  runTestCases(SortTestCases)
})

describe('Product detail modal', () => {
  runTestCases([ProductDetailTestCase])
})
