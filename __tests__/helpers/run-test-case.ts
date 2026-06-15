import { it } from 'vitest'
import type { TestCase } from '../product-list.testcases'


export function runTestCases(testCases: TestCase[]) {
  testCases.forEach(({ scenario, arrange, act, assert }) => {
    it(scenario, async () => {
     await arrange()

      if (act) {
        await act()
      }

      await assert()
    })
  })
}
