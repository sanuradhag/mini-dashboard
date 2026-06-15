import type { FC } from "react";

type ErrorMessageProps = {
	message: string;
	onRetry?: () => void;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => {
	return (
		<div
			className="flex flex-col items-center justify-center gap-4 py-16 text-center"
			role="alert"
		>
			<p className="text-text">{message}</p>
			{onRetry && (
				<button
					type="button"
					onClick={onRetry}
					className="rounded bg-primary px-4 py-2 text-sm font-medium text-button-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				>
					Try again
				</button>
			)}
		</div>
	);
};

export default ErrorMessage;
