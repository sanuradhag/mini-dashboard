import type { FC } from "react";

type LoadingSpinnerProps = {
	label?: string;
};

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
	label = "Loading products",
}) => {
	return (
		<div
			className="flex flex-col items-center justify-center gap-3 py-16"
			role="status"
			aria-live="polite"
		>
			<div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
			<p className="text-sm text-gray-600">{label}</p>
		</div>
	);
};

export default LoadingSpinner;
