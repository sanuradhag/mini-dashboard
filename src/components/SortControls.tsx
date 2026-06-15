import type { ChangeEvent } from "react";

import { setSortDirection, setSortField } from "../state/reducers";
import { selectSortDirection, selectSortField } from "../state/selectors";
import { useAppDispatch, useAppSelector } from "../state/store";
import type { SortField } from "../state/utils/types";

const SORT_FIELD_OPTIONS: { value: SortField; label: string }[] = [
	{ value: "title", label: "Title" },
	{ value: "price", label: "Price" },
];

const SortControls = () => {
	const dispatch = useAppDispatch();
	const sortField = useAppSelector(selectSortField);
	const sortDirection = useAppSelector(selectSortDirection);

	const handleFieldChange = (event: ChangeEvent<HTMLSelectElement>) => {
		dispatch(setSortField(event.target.value as SortField));
	};

	const handleDirectionToggle = () => {
		dispatch(setSortDirection(sortDirection === "asc" ? "desc" : "asc"));
	};

	return (
		<div className="flex items-center gap-2">
			<label htmlFor="sort-field" className="text-sm text-text">
				Sort by
			</label>
			<select
				id="sort-field"
				value={sortField}
				onChange={handleFieldChange}
				className="rounded border border-gray-300 px-3 py-2 text-sm text-text "
			>
				{SORT_FIELD_OPTIONS.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<button
				type="button"
				onClick={handleDirectionToggle}
				aria-label={`Sort ${sortDirection === "asc" ? "ascending" : "descending"}`}
				className="rounded border border-gray-300 px-3 py-2 text-sm text-text"
			>
				{sortDirection === "asc" ? "↑ Asc" : "↓ Desc"}
			</button>
		</div>
	);
};

export default SortControls;
