import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "./utils/types";
import { filterByTitle, sortProducts } from "./utils/helpers";

const selectProductState = (state: RootState) => state.products;

export const selectProducts = createSelector(
	selectProductState,
	({ products }) => products,
);

const selectProductsApiStatus = createSelector(
	selectProductState,
	({ apiStatus }) => apiStatus,
);

export const selectProductsApiError = createSelector(
	selectProductState,
	({ apiError }) => apiError,
);

export const selectSearchQuery = createSelector(
	selectProductState,
	({ searchQuery }) => searchQuery,
);

export const selectSortField = createSelector(
	selectProductState,
	({ sortField }) => sortField,
);

export const selectSortDirection = createSelector(
	selectProductState,
	({ sortDirection }) => sortDirection,
);

export const selectIsApiLoading = createSelector(
	selectProductsApiStatus,
	(status) => status === "loading",
);

export const selectIsApiSucceeded = createSelector(
	selectProductsApiStatus,
	(status) => status === "succeeded",
);

export const selectIsApiFailed = createSelector(
	selectProductsApiStatus,
	(status) => status === "failed",
);

export const selectVisibleProducts = createSelector(
	[selectProducts, selectSearchQuery, selectSortField, selectSortDirection],
	(products, searchQuery, sortField, sortDirection) =>
		sortProducts(filterByTitle(products, searchQuery), sortField, sortDirection),
);

export const selectHasVisibleProducts = createSelector(
	selectVisibleProducts,
	(products) => products.length > 0,
);
