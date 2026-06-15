import { render, screen, waitFor } from "@testing-library/react";
import type { MockInstance } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "../../src/App";
import productsReducer from "../../src/state/reducers";
import type { Product } from "../../src/state/utils/types";

export function createTestStore() {
	return configureStore({
		reducer: {
			products: productsReducer,
		},
	});
}

export function mockFetchSuccess(products: Product[]): MockInstance {
	return vi.spyOn(globalThis, "fetch").mockResolvedValue({
		ok: true,
		json: async () => products,
	} as Response);
}

export function mockFetchFailure(): MockInstance {
	return vi.spyOn(globalThis, "fetch").mockResolvedValue({
		ok: false,
	} as Response);
}

export function mockFetchDelayed(
	products: Product[],
	delayMs: number,
): MockInstance {
	return vi.spyOn(globalThis, "fetch").mockImplementation(
		() =>
			new Promise((resolve) => {
				setTimeout(
					() =>
						resolve({
							ok: true,
							json: async () => products,
						} as Response),
					delayMs,
				);
			}),
	);
}

export function renderApp(): void {
	const store = createTestStore();

	render(
		<Provider store={store}>
			<App />
		</Provider>,
	);
}

export async function waitForProductsLoaded() {
	await waitFor(() => {
		expect(screen.queryByRole("status")).not.toBeInTheDocument();
	});
	await waitFor(() => {
		expect(
			screen.getByLabelText(/search products by title/i),
		).toBeInTheDocument();
	});
}

export function getProductCardTitles(): string[] {
	return screen
		.getAllByRole("button", { name: /view details for/i })
		.map((element) =>
			element.getAttribute("aria-label")!.replace("View details for ", ""),
		);
}
