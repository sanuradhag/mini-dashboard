import type { FC } from "react";

type EmptyStateProps = {
	message: string;
};

const EmptyState: FC<EmptyStateProps> = ({ message }) => {
	return (
		<div className="py-16 text-center">
			<p className="text-text">{message}</p>
		</div>
	);
};

export default EmptyState;
