import { useEffect, useRef, type ReactNode } from "react";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	const dialogRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";
		dialogRef.current?.focus();

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose]);

	if (!isOpen) {
		return null;
	}

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
			role="presentation"
		>
			<button
				type="button"
				className="absolute inset-0 bg-black/50"
				onClick={onClose}
				aria-label="Close dialog"
			/>
			<div
				ref={dialogRef}
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
				tabIndex={-1}
				className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-lg focus:outline-none"
			>
				<div className="mb-4 flex items-start justify-between gap-4">
					<h2 id="modal-title" className="text-lg font-semibold text-text">
						{title}
					</h2>
					<button
						type="button"
						onClick={onClose}
						className="rounded bg-primary px-3 py-1 text-sm font-medium text-button-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					>
						Close
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
