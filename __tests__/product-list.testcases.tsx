import { act, screen, waitFor } from "@testing-library/react";

import { EMPTY_NO_RESULTS, ERROR_LOAD_FAILED } from "../src/utils/constants";
import { mockApiProducts } from "./helpers/mock-data";
import {
	getProductCardTitles,
	mockFetchDelayed,
	mockFetchFailure,
	mockFetchSuccess,
	renderApp,
	waitForProductsLoaded,
} from "./helpers/test-utils";
import type { TestCase } from "./helpers/types";

export const ProductListTestCases: TestCase[] = [
	{
		scenario: "When the api fails",
		arrange: async () => {
			mockFetchFailure();
			renderApp();
		},
		assert: async () => {
			await waitFor(() => {
				expect(screen.getByRole("alert")).toHaveTextContent(ERROR_LOAD_FAILED);
			});
		},
	},
	{
		scenario: "When the api is successful",
		arrange: async () => {
			mockFetchSuccess(mockApiProducts);
			renderApp();
		},
		assert: async () => {
			await waitForProductsLoaded();
			expect(getProductCardTitles()).toEqual([
				"Alpha Widget",
				"Beta Gadget",
				"Charlie Device",
			]);
		},
	},
	{
		scenario: "When the api is delayed",
		arrange: async () => {
			vi.useFakeTimers();
			mockFetchDelayed(mockApiProducts, 1000);
			renderApp();
		},
		assert: async () => {
			expect(screen.getByRole("status")).toHaveTextContent("Loading products");

			await act(async () => {
				await vi.advanceTimersByTimeAsync(1000);
			});

			expect(screen.queryByRole("status")).not.toBeInTheDocument();
			expect(getProductCardTitles()).toHaveLength(3);
		},
	},
	{
		scenario: "When the api is successful with empty results",
		arrange: async () => {
			mockFetchSuccess([]);
			renderApp();
		},
		assert: async () => {
			await waitForProductsLoaded();
			expect(screen.getByText(EMPTY_NO_RESULTS)).toBeInTheDocument();
			expect(
				screen.queryByRole("button", { name: /view details for/i }),
			).not.toBeInTheDocument();
		},
	},
];






