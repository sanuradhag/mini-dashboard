import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EMPTY_NO_RESULTS } from "../src/utils/constants";
import { mockApiProducts } from "./helpers/mock-data";
import {
	mockFetchSuccess,
	renderApp,
	waitForProductsLoaded,
	getProductCardTitles,
} from "./helpers/test-utils";
import type { TestCase } from "./helpers/types";

export const FilterTestCases: TestCase[] = [
	{
		scenario: "When a search query is typed, displays the filtered products",
		arrange: async () => {
			mockFetchSuccess(mockApiProducts);
			renderApp();
			await waitForProductsLoaded();
		},
		act: async () => {
			const searchInput = screen.getByLabelText(/search products by title/i);
			await userEvent.type(searchInput, "beta");
		},
		assert: async () => {
			await waitFor(
				() => {
					expect(getProductCardTitles()).toEqual(["Beta Gadget"]);
				},
				{ timeout: 1000 },
			);
		},
	},
	{
		scenario:
			"When a search query is typed, displays the empty state when no product is matched",
		arrange: async () => {
			mockFetchSuccess(mockApiProducts);
			renderApp();
			await waitForProductsLoaded();
		},
		act: async () => {
			const searchInput = screen.getByLabelText(/search products by title/i);
			await userEvent.type(searchInput, "nonexistent product");
		},
		assert: async () => {
			await waitFor(
				() => {
					expect(screen.getByText(EMPTY_NO_RESULTS)).toBeInTheDocument();
				},
				{ timeout: 1000 },
			);
			expect(
				screen.queryByRole("button", { name: /view details for/i }),
			).not.toBeInTheDocument();
		},
	},
];
