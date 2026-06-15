import { useEffect } from "react";

import {
	selectIsApiFailed,
	selectIsApiLoading,
	selectIsApiSucceeded,
	selectProductsApiError,
} from "../state/selectors";
import { useAppDispatch, useAppSelector } from "../state/store";
import { fetchProductsThunk } from "../state/thunks";
import { ERROR_LOAD_FAILED } from "../utils/constants";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import SortControls from "./SortControls";

const ProductsView = () => {
	const dispatch = useAppDispatch();
	const isApiLoading = useAppSelector(selectIsApiLoading);
	const isApiSucceeded = useAppSelector(selectIsApiSucceeded);
	const isApiFailed = useAppSelector(selectIsApiFailed);
	const apiError = useAppSelector(selectProductsApiError);

	useEffect(() => {
		dispatch(fetchProductsThunk());
	}, [dispatch]);

	const handleRetry = () => {
		dispatch(fetchProductsThunk());
	};

	if (isApiLoading) {
		return <LoadingSpinner />;
	}

	if (isApiFailed) {
		return (
			<ErrorMessage
				message={apiError ?? ERROR_LOAD_FAILED}
				onRetry={handleRetry}
			/>
		);
	}

	if (!isApiSucceeded) {
		return null;
	}

	return (
		<>
			<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<SearchBar />
				<SortControls />
			</div>
			<ProductList />
		</>
	);
};

export default ProductsView;
