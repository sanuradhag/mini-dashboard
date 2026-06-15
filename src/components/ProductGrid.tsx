import type { FC } from "react";
import type { EnrichedProduct } from "../state/utils/types";
import ProductCard from "./ProductCard";

type ProductGridProps = {
	products: EnrichedProduct[];
	onSelect?: (id: number) => void;
};

const ProductGrid: FC<ProductGridProps> = ({ products, onSelect }) => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} onSelect={onSelect} />
			))}
		</div>
	);
};

export default ProductGrid;
