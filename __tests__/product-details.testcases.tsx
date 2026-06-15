import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockApiProducts } from "./helpers/mock-data";
import {
	mockFetchSuccess,
	renderApp,
	waitForProductsLoaded,
} from "./helpers/test-utils";
import type { TestCase } from "./helpers/types";


export const ProductDetailTestCase: TestCase = {
	scenario: "When a product card is clicked, displays the product detail modal",
	arrange: async () => {
		mockFetchSuccess(mockApiProducts);
		renderApp();
		await waitForProductsLoaded();
	},
	act: async () => {
		await userEvent.click(
			screen.getByRole("button", { name: /view details for beta gadget/i }),
		);
	},
	assert: async () => {
		const dialog = screen.getByRole("dialog");
		expect(dialog).toBeInTheDocument();
		expect(
			within(dialog).getByRole("heading", { name: "Beta Gadget" }),
		).toBeInTheDocument();
		expect(within(dialog).getByText("Beta description")).toBeInTheDocument();
	},
};
