import type { FC, KeyboardEvent } from "react";

import { selectProduct } from "../state/reducers";
import { useAppDispatch } from "../state/store";
import type { EnrichedProduct } from "../state/utils/types";

type ProductCardProps = {
	product: EnrichedProduct;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useAppDispatch();
	const { id, image, title, formattedCategory, discountedPrice, price, rating } =
		product;

	const handleSelect = () => {
		dispatch(selectProduct(id));
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleSelect();
		}
	};

	return (
		<article
			role="button"
			tabIndex={0}
			onClick={handleSelect}
			onKeyDown={handleKeyDown}
			aria-label={`View details for ${title}`}
			className="flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
		>
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
