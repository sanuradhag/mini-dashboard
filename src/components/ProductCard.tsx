import type { FC } from "react";
import type { EnrichedProduct } from "../state/utils/types";

type ProductCardProps = {
	product: EnrichedProduct;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { image, title, formattedCategory, discountedPrice, price, rating } = product
	return (
		<article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-primary">
			<div className="flex h-48 items-center justify-center bg-white p-4">
				<img
					src={image}
					alt={title}
					className="max-h-full max-w-full object-contain"
				/>
			</div>
			<div className="flex flex-1 flex-col gap-2 p-4 text-left">
				<span className="inline-block w-fit rounded bg-dark px-2 py-0.5 text-xs text-button-text">
					{formattedCategory}
				</span>
				<h2 className="line-clamp-2 text-sm font-medium text-text">
					{title}
				</h2>
				<div className="mt-auto flex items-baseline gap-2">
					<span className="text-lg font-semibold text-text">
						${discountedPrice.toFixed(2)}
					</span>
					<span className="text-sm text-gray-400 line-through">
						${price.toFixed(2)}
					</span>
				</div>
				<p className="text-xs text-gray-500">
					★ {rating.rate} ({rating.count})
				</p>
			</div>
		</article>
	);
};

export default ProductCard;
