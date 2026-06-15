import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockApiProducts } from "./helpers/mock-data";
import {
	getProductCardTitles,
	mockFetchSuccess,
	renderApp,
	waitForProductsLoaded,
} from "./helpers/test-utils";
import type { TestCase } from "./helpers/types";

export const SortTestCases: TestCase[] = [
	{
		scenario: "When products are sorted by title in asc",
		arrange: async () => {
			mockFetchSuccess(mockApiProducts);
			renderApp();
			await waitForProductsLoaded();
		},
		act: async () => {},
		assert: async () => {
			expect(getProductCardTitles()).toEqual([
				"Alpha Widget",
				"Beta Gadget",
				"Charlie Device",
			]);
		},
	},
	{
		scenario: "When products are sorted by price in desc",
		arrange: async () => {
			mockFetchSuccess(mockApiProducts);
			renderApp();
			await waitForProductsLoaded();
		},
		act: async () => {
			await userEvent.selectOptions(
				screen.getByLabelText(/^sort by$/i),
				"price",
			);
			await userEvent.click(
				screen.getByRole("button", { name: /sort ascending/i }),
			);
		},
		assert: async () => {
			await waitFor(() => {
				expect(getProductCardTitles()).toEqual([
					"Charlie Device",
					"Alpha Widget",
					"Beta Gadget",
				]);
			});
		},
	},
];
