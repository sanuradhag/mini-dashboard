import { selectHasVisibleProducts } from "../state/selectors";
import { useAppSelector } from "../state/store";
import { EMPTY_NO_RESULTS } from "../utils/constants";
import EmptyState from "./EmptyState";
import ProductGrid from "./ProductGrid";

const ProductList = () => {
	const hasVisibleProducts = useAppSelector(selectHasVisibleProducts);

	if (!hasVisibleProducts) {
		return <EmptyState message={EMPTY_NO_RESULTS} />;
	}

	return <ProductGrid />;
};

export default ProductList;
