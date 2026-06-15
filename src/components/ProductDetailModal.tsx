import { clearSelectedProduct } from "../state/reducers";
import { selectSelectedProduct } from "../state/selectors";
import { useAppDispatch, useAppSelector } from "../state/store";
import Modal from "./Modal";

const ProductDetailModal = () => {
	const dispatch = useAppDispatch();
	const product = useAppSelector(selectSelectedProduct);

	if (!product) {
		return null;
	}

	const handleClose = () => {
		dispatch(clearSelectedProduct());
	};

	const {
		image,
		title,
		formattedCategory,
		description,
		discountedPrice,
		price,
		rating,
	} = product;

	return (
		<Modal isOpen onClose={handleClose} title={title}>
			<div className="flex flex-col gap-4">
				<div className="flex h-56 items-center justify-center rounded bg-gray-50 p-4">
					<img
						src={image}
						alt={title}
						className="max-h-full max-w-full object-contain"
					/>
				</div>
				<span className="inline-block w-fit rounded bg-dark px-2 py-0.5 text-xs text-button-text">
					{formattedCategory}
				</span>
				<p className="text-sm text-text">{description}</p>
				<div className="flex items-baseline gap-2">
					<span className="text-xl font-semibold text-text">
						${discountedPrice.toFixed(2)}
					</span>
					<span className="text-sm text-gray-400 line-through">
						${price.toFixed(2)}
					</span>
				</div>
				<p className="text-sm text-gray-500">
					★ {rating.rate} ({rating.count} reviews)
				</p>
			</div>
		</Modal>
	);
};

export default ProductDetailModal;
